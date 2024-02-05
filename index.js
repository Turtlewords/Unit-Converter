/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const input = document.getElementById("input")
const btn = document.getElementById("btn")
const lengthEl = document.getElementById("length-El")
const volumeEl = document.getElementById("volume-El")
const massEl = document.getElementById("mass-El")
const toggle = document.getElementById("toggle-theme")
let = isDark = true

btn.addEventListener("click", function() {
    convertLength(input.value)
    convertVolume(input.value)
    convertMass(input.value)
})

btn.addEventListener("click", function() {

})


function convertLength(input) {
    let feet = Number(input) * 3.281
    let meters = Number(input) / 3.281
    lengthEl.innerHTML = `${input} meters = ${feet.toFixed(3)} feet | ${input} feet = ${meters.toFixed(3)} meters`

}

function convertVolume(input) {
    let gallons = Number(input) * .264
    let liters = Number(input)  * 3.785
    volumeEl.innerHTML = `${input} liters = ${gallons.toFixed(3)} gallons | ${input} gallons = ${liters.toFixed(3)} liters`
}

function convertMass(input) {
    let pounds = Number(input) * 2.204
    let kilos = Number(input) / 2.204
    massEl.innerHTML = `${input} kilos = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilos.toFixed(3)} kilos`
}

function toggleTheme() {
    if (hasDark)
}