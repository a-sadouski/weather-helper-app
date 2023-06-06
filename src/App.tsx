import React from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './layots/Header';
import Footer from './layots/Footer';
import WeatherInfo from './layots/WeatherInfo';
import { ThemeProvider } from 'styled-components';
import { ThemeType } from './constants';
import { Provider } from 'react-redux';
import { weatherHelperStore } from './store';
import { AppContainer } from './AppContainer';
import useLocalStorage from './shared/hooks/useLocalStorage';
import { useTheme } from './shared/hooks/useTheme';

function App() {
    const [themeType, setThemeType] = useLocalStorage(
        'themeType',
        ThemeType.Optimal
    );

    const theme = useTheme(themeType);

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ themeType, setThemeType }}>
                <Provider store={weatherHelperStore}>
                    <AppContainer>
                        <Header />
                        <WeatherInfo />
                        <Footer />
                    </AppContainer>
                </Provider>
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}

export default App;
