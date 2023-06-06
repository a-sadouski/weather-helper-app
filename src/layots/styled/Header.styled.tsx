import styled from 'styled-components';

export const HeaderContainer = styled.section`
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
        height: 180px;
        flex-direction: column;
        justify-content: center;
        padding: 15px 30px 40px 15px;
    }
    @media ${props => props.theme.media.sizeM} {
        flex-direction: column;
        justify-content: center;
        padding: 15px 20px 30px 20px;
        height: 220px;
    }

    @media ${props => props.theme.media.sizeS} {
        flex-direction: column;
        justify-content: center;
        padding: 15px 10px 25px 10px;
        height: 140px;
    }
`;

export const HeaderSummaryTitleContainer = styled.div`
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

export const HeaderTitle = styled.div`
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

export const HeaderActions = styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: end;
    align-items: center;

    @media ${props => props.theme.media.sizeM} {
        width: 450px;
        margin-top: 10px;
    }

    @media ${props => props.theme.media.sizeS} {
        justify-content: center;
        width: 375px;
    }
`;