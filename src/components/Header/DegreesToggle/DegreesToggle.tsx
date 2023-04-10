import React, {useState} from 'react';
import options from "../../../utils/SelectOptions";
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem
} from "../../../shared/DropDown";
import styled from "styled-components";


const DegreesToggleDropDownContainer = styled(DropDownContainer)`
  @media ${props => props.theme.media.sizeM} {
    width: 45px;
  }

  @media ${props => props.theme.media.sizeS} {
    width: 30px;
    margin: 0 10px 0 10px;
  }
`;

const DegreesToggleDropDownHeader = styled(DropDownHeader)`
  @media ${props => props.theme.media.sizeM} {
    padding: 5.5px 0;
    font-size: ${props => props.theme.fontSizes.sizeM};
  }

  @media ${props => props.theme.media.sizeS} {
    padding: 4px 0;
    font-size: ${props => props.theme.fontSizes.sizeS};
  }
`;

const DegreesToggleDropDownList = styled(DropDownList)`
  @media ${props => props.theme.media.sizeM} {
    width: 45px;
  }

  @media ${props => props.theme.media.sizeS} {
    width: 30px;
  }
`

const DegreesToggleListItem = styled(ListItem)`
  @media ${props => props.theme.media.sizeM} {
    padding: 5.5px 0;
    font-size: ${props => props.theme.fontSizes.sizeM};
  }
  @media ${props => props.theme.media.sizeS} {
    padding: 4px 0;
    font-size: ${props => props.theme.fontSizes.sizeS};
  }
`;

interface IDegreesToggleProps {
    weatherTemperatureType: number,
    setWeatherTemperatureType: Function
}

function DegreesToggle({ weatherTemperatureType, setWeatherTemperatureType }: IDegreesToggleProps) {

    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const selectedTemperature = options.temperatureOptions.find(item => item.id === weatherTemperatureType);

    const onOptionClicked = (value: number) => () => {
        setWeatherTemperatureType(value);
        setIsOpen(false);
    };

    return (
        <DegreesToggleDropDownContainer>
            <DegreesToggleDropDownHeader onClick={toggling}>{ selectedTemperature?.title }</DegreesToggleDropDownHeader>
            { isOpen && (
                <DropDownListContainer>
                    <DegreesToggleDropDownList>
                        { options.temperatureOptions.map(option => (
                            <DegreesToggleListItem isSelected={option.id === weatherTemperatureType} onClick={onOptionClicked(option.id)} key={option.id}>
                                {option.title}
                            </DegreesToggleListItem>
                        ))}
                    </DegreesToggleDropDownList>
                </DropDownListContainer>
            )}
        </DegreesToggleDropDownContainer>
    )

}

export default DegreesToggle;