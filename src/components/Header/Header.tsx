import React, {useContext, useEffect, useState} from 'react';
import PlaceSearcher from "./PlaceSearcher/PlaceSearcher";
import DegreesToggle from "./DegreesToggle/DegreesToggle";
import AuthorizationContainer from "./AuthorizationContainer/AuthorizationContainer";
import styled from "styled-components";
import SummaryWeatherInfo from "./SummaryWeatherInfo";
import WeatherDataContext, {IWeatherDataContext} from "../../context/WeatherDataContext";
import WeatherService from "../../utils/WeatherService";
import SettingsDropdown from "./SettingsDropdown";
import {useTranslation} from "react-i18next";

const HeaderContainer = styled.section`
  z-index: 1;
  position: relative;
  max-width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 10px 80px 10px 30px;
  @media ${props => props.theme.media.sizeL} {
    height: 160px;
    flex-direction: column;
    justify-content: center;
    padding: 15px 30px;
  }
  @media ${props => props.theme.media.sizeM} {
    flex-direction: column;
    justify-content: center;
    padding: 15px 20px;
    height: 200px;
  }

  @media ${props => props.theme.media.sizeS} {
    flex-direction: column;
    justify-content: center;
    padding: 15px 10px;
    height: 120px;
  }
`;

const HeaderSummaryTitleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  @media ${props => props.theme.media.sizeL} {
    flex-direction: row;
    justify-content: center;
  }
  @media ${props => props.theme.media.sizeM} {
    flex-direction: column;
  }
`;

const HeaderTitle = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  font-size: 36px;
  color: ${props => props.theme.colors.font};
  @media ${props => props.theme.media.sizeL} {
    align-items: center;
  }
  @media ${props => props.theme.media.sizeM} {
    font-size: 32px;
  }
  @media ${props => props.theme.media.sizeS} {
    display: none;
  }
`;

const HeaderActions = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: end;
  align-items: center;

  @media ${props => props.theme.media.sizeM} {
    width: 450px;
  }

  @media ${props => props.theme.media.sizeS} {
    justify-content: center;
    width: 375px;
  }
`;



function Header() {

    const [t] = useTranslation();

    const [isErrorExist, setIsErrorExist] = useState(false);

    const {
        currentWeatherData,
        currentLocationTitle,
        weatherTemperatureType,
        setWeatherTemperatureType,
        setCurrentWeatherData,
        setCurrentLocationTitle
    }: IWeatherDataContext = useContext(WeatherDataContext);

    useEffect(() => {
        setWeatherInfo(currentLocationTitle);
    }, []);

    function setWeatherInfo(searcherValue: string) {
        WeatherService.fetchCoordinatesData(searcherValue)
            .then(coordinates => WeatherService.fetchWeatherData(coordinates))
            .then((weatherData => {
                setIsErrorExist(false);
                setCurrentLocationTitle(searcherValue);
                setCurrentWeatherData(weatherData);
            }))
            .catch(() => setIsErrorExist(true))
    }

    return (
        <HeaderContainer>
            <HeaderSummaryTitleContainer>
                <HeaderTitle>{t('headerTitle')}</HeaderTitle>
                { currentWeatherData.cod
                    && <SummaryWeatherInfo
                        currentLocationTitle={currentLocationTitle}
                        weatherTemperatureType={weatherTemperatureType}
                        weatherData={currentWeatherData}/>
                }
            </HeaderSummaryTitleContainer>
            <HeaderActions>
                <PlaceSearcher isErrorExist={isErrorExist} onFetchDataHandler={setWeatherInfo}/>
                <DegreesToggle weatherTemperatureType={weatherTemperatureType} setWeatherTemperatureType={setWeatherTemperatureType}/>
                <AuthorizationContainer />
            </HeaderActions>
            <SettingsDropdown />
        </HeaderContainer>
    );
}

export default Header;