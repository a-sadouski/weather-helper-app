import { AuthStoreActions } from '../constants';

const defaultState = {
    isLoggedIn: false
};

export const AuthReducer = (
    state = defaultState,
    action: { type: number; payload: any }
) => {
    switch (action.type) {
        case AuthStoreActions.SET_LOGGED_IN_STATUS:
            return { ...state, isLoggedIn: action.payload };

        default:
            return state;
    }
};
