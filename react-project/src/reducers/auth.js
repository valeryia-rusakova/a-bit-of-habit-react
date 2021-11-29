import {authConstants} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case authConstants.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                token: payload.token,
                user: payload
            }
        case authConstants.LOGIN_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
            }
        case authConstants.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case authConstants.SIGNUP_FAIL:
        case authConstants.LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
  }