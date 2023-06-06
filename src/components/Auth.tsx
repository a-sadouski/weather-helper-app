import React, { useEffect, useState } from 'react';
import {
    AuthActionButton,
    AuthActions,
    AuthBody,
    AuthCloseAction,
    AuthContainer,
    AuthForm,
    AuthLabel,
    AuthLoadingContainer,
    AuthTitle,
    FormErrorMessage,
    LoginInputContainer,
    PasswordInputContainer
} from './styled/AuthContainer.styled';
import { AuthStoreActions, IAuthDto, IAuthProps } from '../constants';
import api from '../api/api';
import { useDispatch } from 'react-redux';
import { FieldValues, useForm } from 'react-hook-form';
import { TailSpin } from 'react-loader-spinner';

function Auth({ isVisible, onClose }: IAuthProps) {
    const dispatch = useDispatch();
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const token = localStorage.getItem('jwt');
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
        watch
    } = useForm({
        mode: 'onChange'
    });

    useEffect(() => {
        if (token) {
            dispatch({
                type: AuthStoreActions.SET_LOGGED_IN_STATUS,
                payload: true
            });
        }
    }, [dispatch, token]);

    async function signUp(authDto: IAuthDto) {
        await api.singUp(authDto);
    }

    async function signIn(authDto: IAuthDto) {
        const token = await api.signIn(authDto);
        localStorage.setItem('jwt', token.jwt);
        dispatch({
            type: AuthStoreActions.SET_LOGGED_IN_STATUS,
            payload: true
        });
    }

    async function onAuthSubmit(data: FieldValues) {
        const { repeatedPassword, ...authDto } = data;
        if (isSignUpMode) {
            setIsLoading(true);
            await signUp(authDto as IAuthDto);
            setIsLoading(false);
        } else {
            setIsLoading(true);
            await signIn(authDto as IAuthDto);
            setIsLoading(false);
        }
        closeForm();
    }

    function onSignUpActionClick() {
        setIsSignUpMode(true);
    }

    function onBackActionClick() {
        reset();
        setIsSignUpMode(false);
    }

    function closeForm() {
        reset();
        onClose(false);
        setIsSignUpMode(false);
    }

    return !isVisible ? null : (
        <AuthContainer onClick={() => closeForm()}>
            <AuthBody onClick={e => e.stopPropagation()}>
                <AuthTitle>Auth</AuthTitle>
                <AuthCloseAction onClick={() => closeForm()}>
                    &times;
                </AuthCloseAction>
                {isLoading ? (
                    <AuthLoadingContainer>
                        <TailSpin
                            height='120'
                            width='120'
                            color='#4fa94d'
                            ariaLabel='tail-spin-loading'
                            radius='1'
                            wrapperStyle={{}}
                            wrapperClass=''
                            visible={isLoading}
                        />
                    </AuthLoadingContainer>
                ) : (
                    <AuthForm onSubmit={handleSubmit(onAuthSubmit)}>
                        <AuthLabel>Login:</AuthLabel>
                        <LoginInputContainer
                            type='text'
                            {...register('email', {
                                required: 'Email field is required.',
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Enter valid email.'
                                }
                            })}
                        ></LoginInputContainer>
                        <FormErrorMessage>
                            {errors?.email && errors.email?.message?.toString()}
                        </FormErrorMessage>
                        <AuthLabel>Password:</AuthLabel>
                        <PasswordInputContainer
                            type='password'
                            {...register('password', {
                                required: 'Password field is required.',
                                minLength: {
                                    value: 8,
                                    message: 'Minimal length is 8 symbols.'
                                }
                            })}
                        ></PasswordInputContainer>
                        <FormErrorMessage>
                            {errors?.password &&
                                errors.password?.message?.toString()}
                        </FormErrorMessage>
                        {isSignUpMode && (
                            <>
                                <AuthLabel>Repeat password:</AuthLabel>
                                <PasswordInputContainer
                                    type='password'
                                    {...register('repeatedPassword', {
                                        required:
                                            'Repeated password field is required.',
                                        minLength: {
                                            value: 8,
                                            message:
                                                'Minimal length is 8 symbols.'
                                        },
                                        validate: (val: string) => {
                                            if (watch('password') !== val) {
                                                return 'Passwords should match';
                                            }
                                        }
                                    })}
                                ></PasswordInputContainer>
                                <FormErrorMessage>
                                    {errors?.repeatedPassword &&
                                        errors.repeatedPassword?.message?.toString()}
                                </FormErrorMessage>
                            </>
                        )}
                        <AuthActions>
                            {!isSignUpMode && (
                                <>
                                    <AuthActionButton
                                        onClick={() => onSignUpActionClick()}
                                    >
                                        Sign Up
                                    </AuthActionButton>
                                </>
                            )}
                            {isSignUpMode && (
                                <>
                                    <AuthActionButton
                                        onClick={() => onBackActionClick()}
                                    >
                                        Back
                                    </AuthActionButton>
                                </>
                            )}
                            <AuthActionButton type='submit' disabled={!isValid}>
                                Submit
                            </AuthActionButton>
                        </AuthActions>
                    </AuthForm>
                )}
            </AuthBody>
        </AuthContainer>
    );
}

export default Auth;
