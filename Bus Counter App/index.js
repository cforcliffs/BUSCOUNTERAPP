let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetBtn = document.getElementById("reset-btn")
let subtractBtn = document.getElementById("subtract-btn")


let count = 0


function increment(){

    count+=1
    countEl.textContent = count

}


function subtract(){

    count-=1
    countEl.textContent = count

}

function save(){


saveEl.textContent += count + " " + " + "
countEl.textContent = 0
count = 0
}

function reset(){

saveEl.textContent = "Previous Entries: "
count = 0
}
