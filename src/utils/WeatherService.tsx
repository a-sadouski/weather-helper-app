const API_KEY = 'd33c40abf8de8a797a90909f8a2540fe';

function fetchCoordinatesData(searcherValue: string) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searcherValue}&appid=${API_KEY}`
    return fetch(url)
        .then(res => res.json())
        .then((data) => `lat=${data[0].lat}&lon=${data[0].lon}`)
}

function fetchWeatherData(coordinates: string) {
    // const hourlyUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`;
    // fetch(hourlyUrl)
    //     .then(res => res.json())
    const url = `https://api.openweathermap.org/data/2.5/weather?${coordinates}&appid=${API_KEY}`;
    return fetch(url)
        .then(res => res.json());
}

const dto = {
    fetchCoordinatesData,
    fetchWeatherData
}

export default dto;