/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const input = document.getElementById("input").value
const btn = document.getElementById("btn")
const lengthEl = document.getElementById("length-El")
const volumeEl = document.getElementById("volume-El")
const massEl = document.getElementById("mass-El")

btn.addEventListener("click", function() {
    convertLength(input)
    convertVolume(input)
    convertMass(input)
})


function convertLength(input) {
    let feet = Number(input) * 3.281
    let meters = Number(input) / 3.281
    lengthEl.innerHTML = `${input} meters = ${feet.toFixed(3)} | ${input} feet = ${meters.toFixed(3)} meters`

}

function convertVolume(input) {
    let gallons = Number(input) * .264
    let liters = Number(input)  * 3.785
    volumeEl.innerHTML = `${input} liters = ${gallons.toFixed(3)} | ${input} gallons = ${liters.toFixed(3)} liters`
}

function convertMass(input) {
    let pounds = Number(input) * 2.204
    let kilos = Number(input) / 2.204
    volumeEl.innerHTML = `${input} kilos = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilos.toFixed(3)} kilos`
}