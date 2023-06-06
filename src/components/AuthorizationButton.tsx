import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthorizationButtonContainer } from './styled/AuthorizationContainer.styled';
import Auth from './Auth';
import { AuthStoreActions, IAuthorizationButtonProps } from '../constants';
import api from '../api/api';
import { useDispatch } from 'react-redux';

function AuthorizationButton({ isLoggedIn }: IAuthorizationButtonProps) {
    const dispatch = useDispatch();
    const [t] = useTranslation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    function toggleAuthModal() {
        setIsAuthModalOpen(true);
    }

    async function logOut() {
        await api.logOut();
        localStorage.removeItem('jwt');
        dispatch({
            type: AuthStoreActions.SET_LOGGED_IN_STATUS,
            payload: false
        });
    }

    return (
        <>
            {isLoggedIn ? (
                <AuthorizationButtonContainer onClick={() => logOut()}>
                    {t('logOutButtonText')}
                </AuthorizationButtonContainer>
            ) : (
                <AuthorizationButtonContainer onClick={() => toggleAuthModal()}>
                    {t('signInButtonText')}
                </AuthorizationButtonContainer>
            )}
            <Auth
                isVisible={isAuthModalOpen}
                onClose={setIsAuthModalOpen}
            ></Auth>
        </>
    );
}

export default AuthorizationButton;
