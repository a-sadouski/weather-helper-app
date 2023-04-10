import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";


const AuthorizationButton = styled("button")`
  width: 90px;
  position: relative;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  color: ${props => props.theme.colors.font};
  font-size: ${props => props.theme.fontSizes.default};
  padding: ${props => props.theme.buttonPaddings.default};
  cursor: pointer;
  transition: 200ms;
  &:hover {
    background-color: ${props => props.theme.colors.hoverBackground};
  }
  @media ${props => props.theme.media.sizeM} {
    width: 68px;
    padding: ${props => props.theme.buttonPaddings.sizeM};
    font-size: ${props => props.theme.fontSizes.sizeM};
  }

  @media ${props => props.theme.media.sizeS} {
    width: 57px;
    padding: ${props => props.theme.buttonPaddings.sizeS};
    font-size: ${props => props.theme.fontSizes.sizeS};
  }
`;

function AuthorizationContainer() {

    const [t] = useTranslation();

    return (
        <>
            <AuthorizationButton>
                {t("signInButtonText")}
            </AuthorizationButton>
        </>
    );
}

export default AuthorizationContainer;