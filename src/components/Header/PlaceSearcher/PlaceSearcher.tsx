import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from "styled-components";
import {useTranslation} from "react-i18next";


const PlaceSearcherContainer = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  width: 300px;
  font-size: 18px;
  border: 1px solid ${props => props.theme.colors.border};
  border-right: 0;
  border-radius: 8px 0 0 8px;
  padding: 10px;
  outline: none;
  @media ${props => props.theme.media.sizeM} {
    width: 220px;
    font-size: ${props => props.theme.fontSizes.sizeM};
    padding: ${props => props.theme.buttonPaddings.sizeM};
  }
  @media ${props => props.theme.media.sizeS} {
    width: 150px;
    font-size: ${props => props.theme.fontSizes.sizeS};
    padding: ${props => props.theme.buttonPaddings.sizeS};
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 15px;
  font-size: 18px;
  @media ${props => props.theme.media.sizeM} {
    left: 10px;
  }
  @media ${props => props.theme.media.sizeS} {
    top: 5px;
    left: 5px;
  }
`;

const SearchButton = styled.button`
  width: 110px;
  position: relative;
  font-size: 18px;
  color: ${props => props.theme.colors.font};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0 8px 8px 0;
  padding: ${props => props.theme.buttonPaddings.default};
  padding-left: 40px;
  transition: 200ms;
  &:hover {
    background-color: ${props => props.theme.colors.hoverBackground};
  }
  @media ${props => props.theme.media.sizeM} {
    width: 87px;
    font-size: ${props => props.theme.fontSizes.sizeM};
    padding: ${props => props.theme.buttonPaddings.sizeM};
    padding-left: 32px;
  }
  @media ${props => props.theme.media.sizeS} {
    width: 70px;
    font-size: ${props => props.theme.fontSizes.sizeS};
    padding: ${props => props.theme.buttonPaddings.sizeS};
    padding-left: 24px;
  }
`;

const ErrorContainer = styled.div`
    font-size: 18px;
    text-shadow: 2px 4px 4px rgba(0,0,0,0.6);
    position: absolute;
    bottom: -30px;
    color: #FF2400;
`

interface IPlaceSearcherProps {
    isErrorExist: boolean,
    onFetchDataHandler: Function
}

function PlaceSearcher( { isErrorExist, onFetchDataHandler }: IPlaceSearcherProps) {

    const [t] = useTranslation();
    const [placeSearcherValue, setPlaceSearcherValue] = useState('');

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            onFetchDataHandler(placeSearcherValue);
        }
    }

    return (
        <PlaceSearcherContainer>
            <SearchInput value={placeSearcherValue}
                         onChange={(e) => setPlaceSearcherValue(e.target.value)}
                         onKeyDown={(e) => handleKeyDown(e)}
                         placeholder={t("locationPlaceHolder") as string}>
            </SearchInput>
            <SearchButton
                onClick={() => onFetchDataHandler(placeSearcherValue)}>
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
                <span>{t("searchButtonText")}</span>
            </SearchButton>
            {   isErrorExist &&
                <ErrorContainer>{t("placeSearcherErrorMessage")}</ErrorContainer>
            }
        </PlaceSearcherContainer>
    );
}

export default PlaceSearcher;