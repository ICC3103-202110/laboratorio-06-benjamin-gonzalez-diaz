function CelsiusKelvin(temp){
    return(temp + 273.15)
}
function CelsiusFahrenheit(temp){
    return ((temp * 9/5) + 32)
}
function KelvinFahrenheit(temp){
    return ((temp - 273.15) * 9/5 + 32)
}
function KelvinCelsius(temp){
    return (temp - 273.15) 
}
function FahrenheitKelvin(temp){
    return(( temp - 32) * 5/9 + 273.15)
}
function FahrenheitCelsius(temp){
    return (( temp - 32) * 5/9)
}
console.log(FahrenheitKelvin(4))