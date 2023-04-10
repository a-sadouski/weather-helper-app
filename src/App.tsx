import React, {useMemo, useState} from 'react';
import './App.css';
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherDataContext from "./context/WeatherDataContext";
import styled, {ThemeProvider} from "styled-components";
import Themes from "./utils/ThemesList";
import {Temperature, ThemeType} from "./utils";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {

    const [currentLocationTitle, setCurrentLocationTitle] = useState('Tbilisi');
    const [currentWeatherData, setCurrentWeatherData] = useState({});
    const [weatherTemperatureType, setWeatherTemperatureType] = useState(Temperature.Celsius);
    const [themeType, setThemeType] = useState(ThemeType.Optimal);

    const theme = useMemo(() => {
        return {
            colors: Themes.find((item => item.id === themeType)),
            buttonPaddings: {
                default: '10px',
                sizeL: '10px',
                sizeM: '8px',
                sizeS: '6px'
            },
            fontSizes: {
                default: '18px',
                sizeL: '18px',
                sizeM: '14px',
                sizeS: '12px'
            },
            media: {
                sizeL: '(max-width: 1300px) and (min-width: 768px)',
                sizeM: '(max-width: 767px) and (min-width: 425px)',
                sizeS: '(max-width: 500px)',
            }
        }
    }, [themeType]);

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{themeType, setThemeType}}>
                <WeatherDataContext.Provider value={{
                    currentWeatherData,
                    setCurrentWeatherData,
                    weatherTemperatureType,
                    setWeatherTemperatureType,
                    currentLocationTitle,
                    setCurrentLocationTitle,
                }}>
                    <div className="App">
                        <AppContainer>
                            <Header />
                            <WeatherInfo weatherData={currentWeatherData}/>
                            <Footer />
                        </AppContainer>
                    </div>
                </WeatherDataContext.Provider>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;
