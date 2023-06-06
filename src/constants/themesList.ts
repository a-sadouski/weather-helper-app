import { ThemeType } from './enums';

const themesList = [
    {
        id: ThemeType.Optimal,
        title: 'Optimal',
        font: '#ffffff',
        background: '#54786b',
        secondaryBackground: '#3a544a',
        hoverBackground: '#4b6c60',
        border: '#ffffff'
    },
    {
        id: ThemeType.Light,
        title: 'Light',
        font: '#000000',
        background: '#c8dbe8',
        hoverBackground: '#B4C5D0',
        secondaryBackground: '#D8E5EE',
        border: '#000000'
    },
    {
        id: ThemeType.Dark,
        title: 'Dark',
        font: '#ffffff',
        background: '#0c2130',
        hoverBackground: '#243744',
        secondaryBackground: '#07131c',
        border: '#ffffff'
    }
];

export default themesList