const box = document.getElementById("box");
box.style.display = "block";

const result = document.getElementById("result");
result.style.display = "none";

const retry = document.getElementById("retry");
retry.style.display = "none";

function show() {
    box.style.display = "none";

    const cards = [
        ["大吉", "最高の一日"],
        ["吉","穏やかに過ごせる一日"],
        ["中吉", "とても良い一日"],
        ["末吉", "まずまずの一日"],
        ["凶","注意が必要な一日"],
        ["大凶","最悪な一日"]
    ];
    let r = Math.floor(Math.random()*cards.length);
    const luck = document.getElementById("luck");
    luck.textContent = cards[r][0];
    const detail = document.getElementById("detail");
    detail.textContent = cards[r][1];
    result.style.display = "block";
    retry.style.display = "block";
}

function again() {
    box.style.display = "block";
    result.style.display = "none";
    retry.style.display = "none";
}