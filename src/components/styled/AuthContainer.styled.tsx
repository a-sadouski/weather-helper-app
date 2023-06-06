import styled from 'styled-components';

export const AuthContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: appear;
    animation-duration: 300ms;
`;

export const AuthBody = styled.div`
    width: 550px;
    height: 400px;
    position: relative;
    background: white;
    margin: 0 20px;
    max-height: calc(100vh - 40px);
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
`;

export const AuthLoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AuthTitle = styled.h2`
    width: 100%;
    padding: 10px 20px;
    color: ${props => props.theme.colors.font};
    background-color: ${props => props.theme.colors.background};
`;

export const AuthCloseAction = styled.span`
  font-size: 32px;
  color: ${props => props.theme.colors.font};
  position: absolute;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`

export const AuthForm = styled.form`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const LoginInputContainer = styled.input`
    width: 100%;
    font-size: ${props => props.theme.fontSizes.default};
`;

export const PasswordInputContainer = styled.input`
    width: 100%;
    font-size: ${props => props.theme.fontSizes.default};
`;

export const AuthLabel = styled.label`
  
`;

export const AuthActions = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  display: flex;
  justify-self: end;
  align-self: end;
  padding: 0 20px;
`;

export const AuthActionButton = styled.button`
  padding: 8px 16px;
  font-size: ${props => props.theme.fontSizes.sizeM};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.font};
  background-color: ${props => props.theme.colors.background};
  border-radius: 8px;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.7;
  }
`;

export const FormErrorMessage = styled.div`
  color: red;
`;

