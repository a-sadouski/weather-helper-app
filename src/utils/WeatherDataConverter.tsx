import {Temperature} from "./Enums";

function convertTemperature(temperature: number, type: number) {
    return Math.round(
        type === Temperature.Celsius
            ? convertKelvinToCelsius(temperature)
            : convertKelvinToFahrenheit(temperature)
        );
}

function convertKelvinToCelsius(temperature: number) {
    return temperature - 273;
}

function convertKelvinToFahrenheit(temperature: number) {
    return temperature * 9/5 - 459.67;
}

const converterFunctions = {
    convertTemperature,
    convertKelvinToCelsius,
    convertKelvinToFahrenheit
}

export default converterFunctions;