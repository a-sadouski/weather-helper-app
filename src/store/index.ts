import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { WeatherReducer } from './WeatherReducer';
import { AuthReducer } from './AuthReducer';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    auth: AuthReducer
});

export const weatherHelperStore = configureStore({ reducer: rootReducer });
