let words = [];

fetch("words.json")
.then(res => res.json())
.then(data => {
    words = data;
});

function findPrefix() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let result = words.filter(word =>
        word.startsWith(input)
    );

    showResult(result);
}

function findSuffix() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let result = words.filter(word =>
        word.endsWith(input)
    );

    showResult(result);
}

function showResult(data){

    let html = "";

    if(data.length === 0){
        html = "Tidak ditemukan";
    }else{
        html = data.slice(0,100)
        .map(w => `<div>${w}</div>`)
        .join("");
    }

    document.getElementById("result").innerHTML = html;
}
