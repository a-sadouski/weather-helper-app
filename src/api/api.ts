import { IAuthDto, ICoordinates, IForecastEntry } from '../constants';

async function fetchCoordinatesData(searcherValue: string, isForMap?: boolean): Promise<ICoordinates> {
    const response = await fetch(`http://localhost:5000/weather/coordinates?location=${searcherValue}&isForMap=${isForMap}`)
    return await response.json();
}

async function fetchCurrentWeatherData(searcherValue: string): Promise<IForecastEntry> {
    const response = await fetch(`http://localhost:5000/weather/current-weather?location=${searcherValue}`)
    return await response.json();
}

async function fetchWeatherForecastData(searcherValue: string): Promise<IForecastEntry[]> {
    const response = await fetch(`http://localhost:5000/weather/forecast?location=${searcherValue}`)
    return await response.json();
}

async function singUp(authDto: IAuthDto) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authDto)
    };
    const response = await fetch(`http://localhost:5000/auth/sign-up`, requestOptions);
    await response.json();
}

async function signIn(authDto: IAuthDto) {
    const response = await fetch(`http://localhost:5000/auth/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(authDto)
    });
    return response.json();
}

async function logOut() {
    const response = await fetch(`http://localhost:5000/auth/log-out`, {
        method: 'POST',
        credentials: 'include',
    });
    return response.json();
}

const API = {
    fetchCoordinatesData,
    fetchCurrentWeatherData,
    fetchWeatherForecastData,
    singUp,
    signIn,
    logOut
};

export default API;
