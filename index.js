let inputBox = document.querySelector("input")
let btnIncrease = document.querySelector(".inc")
let btnDecrease = document.querySelector(".dec")
let heading = document.querySelector("h1");

inputBox.value = 0;

btnIncrease.addEventListener('click', function(){
    inputBox.value++;
})

btnDecrease.addEventListener('click', function(){
    inputBox.value--;
})

