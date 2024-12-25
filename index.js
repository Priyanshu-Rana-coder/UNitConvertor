let inputEl=document.getElementById("input-el")
let buttonEl=document.getElementById("button-el")
let lengthEl=document.getElementById("length-el")
let massEl=document.getElementById("mass-el")
let volumeEl=document.getElementById("volume-el")
buttonEl.addEventListener("click",function(){
    let inputValue=inputEl.value
    console.log("hello")
    lengthEl.innerText=inputValue+" Meters="+ (inputValue*3.281).toFixed(2) +" Feets || "+inputValue+" Feets="+ (inputValue/3.281).toFixed(2) +"meters" 
    massEl.innerText=`
        ${inputValue} Kilograms= ${(inputValue*2.204).toFixed(2)}  Pounds 
        ${inputValue} Pounds= ${(inputValue/2.204).toFixed(2)} Kilograms
        ` 
    volumeEl.innerText=`
        ${inputValue} Litres= ${(inputValue*0.264).toFixed(2)}  Gallons ${inputValue} Gallons= ${(inputValue/0.264).toFixed(2)} Litres
        `
})