import React, { useRef } from 'react';
import options from '../constants/selectOptions';
import { DropDownListContainer } from '../shared/DropDown';
import useToggle from '../shared/hooks/useToggle';
import {
    DegreesToggleDropDownContainer,
    DegreesToggleDropDownHeader,
    DegreesToggleDropDownList,
    DegreesToggleListItem
} from './styled/DegreesToggle.styled';
import { IDegreesToggleProps } from '../constants';

function DegreesToggle({
    weatherTemperatureType,
    setWeatherTemperatureType
}: IDegreesToggleProps) {
    const wrapperRef = useRef(null);
    const [toggleValue, toggle] = useToggle(wrapperRef, false);
    const selectedTemperature = options.temperatureOptions.find(
        item => item.id === weatherTemperatureType
    )!;

    const onOptionClicked = (value: number) => {
        toggle();
        setWeatherTemperatureType(value);
    };

    return (
        <DegreesToggleDropDownContainer>
            <DegreesToggleDropDownHeader onClick={toggle}>
                {selectedTemperature.title}
            </DegreesToggleDropDownHeader>
            {toggleValue && (
                <DropDownListContainer ref={wrapperRef}>
                    <DegreesToggleDropDownList>
                        {options.temperatureOptions.map(option => (
                            <DegreesToggleListItem
                                isSelected={
                                    option.id === weatherTemperatureType
                                }
                                onClick={() => onOptionClicked(option.id)}
                                key={option.id}
                            >
                                {option.title}
                            </DegreesToggleListItem>
                        ))}
                    </DegreesToggleDropDownList>
                </DropDownListContainer>
            )}
        </DegreesToggleDropDownContainer>
    );
}

export default DegreesToggle;
