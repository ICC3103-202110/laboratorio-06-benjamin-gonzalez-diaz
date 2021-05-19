function CelsiusKelvin(temp){
    return parseFloat(temp + 273.15)
}
function CelsiusFahrenheit(temp){
    return parseFloat((temp * 9/5) + 32)
}
function KelvinFahrenheit(temp){
    return parseFloat((temp - 273.15) * 9/5 + 32)
}
function KelvinCelsius(temp){
    return parseFloat(temp - 273.15) 
}
function FahrenheitKelvin(temp){
    return parseFloat(( temp - 32) * 5/9 + 273.15)
}
function FahrenheitCelsius(temp){
    return parseFloat(( temp - 32) * 5/9)
}
function Update(option,temperature,unit,convert,Model){
    if(unit === 'Celsius' && convert === 'Fahrenheit'){
        NewTemp = CelsiusFahrenheit(temperature)
    }
    else if(unit === 'Celsius' && convert === 'Kelvin'){
        NewTemp = CelsiusKelvin(temperature)
    }
    else if(unit === 'Kelvin' && convert === 'Celsius'){
        newTemp = KelvinCelsius(temperature)
    }
    else if(unit === 'Kelvin' && convert === 'Fahrenheit'){
        NewTemp = KelvinFahrenheit(temperature)
    }
    else if(unit === 'Fahrenheit' && convert === 'Kelvin'){
        NewTemp = FahrenheitKelvin(temperature)
    }
    else if(unit === 'Fahrenheit' && convert === 'Celsius'){
        NewTemp = FahrenheitCelsius(temperature)
    }
    else{
        NewTemp = temperature
    }
    
    if(option === 'y'){
        return{
            ...Model,
            LeftValue: temperature,
            LeftUnit: unit,
            RightValue: NewTemp,
            RightUnit: convert
        }
    }
    else{
        return {
            ...Model,
            LeftValue: NewTemp,
            LeftUnit: convert,
            RightValue: temperature,
            RightUnit: unit
        }
    }
}
module.exports = Update