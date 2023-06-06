import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import {
    ErrorContainer,
    PlaceSearcherContainer,
    SearchButton,
    SearchIcon,
    SearchInput
} from './styled/PlaceSearcher.styled';
import { IPlaceSearcherProps } from '../constants';

function PlaceSearcher({
    isErrorExist,
    setCurrentLocationTitle
}: IPlaceSearcherProps) {
    const [t] = useTranslation();
    const [placeSearcherValue, setPlaceSearcherValue] = useState('');

    function onSearchInputKeyDown(
        event: React.KeyboardEvent<HTMLInputElement>
    ) {
        if (event.key === 'Enter') {
            onSearchInputEnter();
        }
    }

    function onSearchInputEnter(): void {
        setCurrentLocationTitle(placeSearcherValue);
        setPlaceSearcherValue('');
    }

    return (
        <PlaceSearcherContainer>
            <SearchInput
                value={placeSearcherValue}
                onChange={e => setPlaceSearcherValue(e.target.value)}
                onKeyDown={e => onSearchInputKeyDown(e)}
                placeholder={t('locationPlaceHolder') as string}
            ></SearchInput>
            <SearchButton onClick={() => onSearchInputEnter()}>
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
                <span>{t('searchButtonText')}</span>
            </SearchButton>
            {isErrorExist && (
                <ErrorContainer>
                    {t('placeSearcherErrorMessage')}
                </ErrorContainer>
            )}
        </PlaceSearcherContainer>
    );
}

export default PlaceSearcher;
