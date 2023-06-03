let feet = document.getElementById('feet')
let inches = document.getElementById('inches')
let meters = document.getElementById('meters')
let kilometers = document.getElementById('kilometers')
let inputs = document.querySelectorAll('.converter-content input')
inputs.forEach((input)=> {
    console.log(input)
})

feet.onchange = function (e) {
    let value = e.target.value
    inches.value = Number.isInteger(value * 12) ? value * 12 : (value * 12).toFixed(3)
    meters.value = Number.isInteger(value /3.2808) ? value /3.2808 : (value /3.2808).toFixed(3)
    kilometers.value = Number.isInteger(value /3280.8) ? value /3280.8 : (value /3280.8).toFixed(3)
}
inches.onchange = function (e) {
    let value = e.target.value
    feet.value = Number.isInteger(value *0.083333) ? value *0.083333 : (value *0.083333).toFixed(3)
    meters.value = Number.isInteger(value /39.370) ? value /39.370 : (value /39.370).toFixed(3) 
    kilometers.value = Number.isInteger(value /39370) ? value /39370 : (value /39370).toFixed(3)
}
meters.onchange = function (e) {
    let value = e.target.value
    inches.value = Number.isInteger(value *39.370) ?value *39.370 : (value *39.370).toFixed(3)
    feet.value = Number.isInteger(value *3.2808) ? value *3.2808 : (value *3.2808).toFixed(3) 
    kilometers.value = Number.isInteger(value /1000) ? value /1000 : (value /1000).toFixed(3) 
}
kilometers.onchange = function (e) {
    let value = e.target.value
    inches.value = Number.isInteger(value *39370) ? value *39370 : (value *39370).toFixed(3)
    meters.value = Number.isInteger(value *1000) ? value *1000 : (value *1000).toFixed(3) 
    feet.value = Number.isInteger(value *3280.8) ? value *3280.8: (value *3280.8).toFixed(3) 
}