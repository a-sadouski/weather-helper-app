import React from 'react';
import styled from "styled-components";


const FooterContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.colors.background};
`

function Footer() {
    return (
        <FooterContainer>

        </FooterContainer>
    );
}

export default Footer;