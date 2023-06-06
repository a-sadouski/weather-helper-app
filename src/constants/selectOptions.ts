import { Language, Temperature } from './enums';

const temperatureOptions = [
    {
        id: Temperature.Celsius,
        title: '°C'
    },
    {
        id: Temperature.Fahrenheit,
        title: '°F'
    }
];

const languageOptions = [
    {
        id: Language.English,
        title: 'English',
        image: '/uk-flag.png'
    },
    {
        id: Language.Russian,
        title: 'Russian',
        image: '/russia-flag.png'
    }
];

const options = {
    temperatureOptions,
    languageOptions
};

export default options