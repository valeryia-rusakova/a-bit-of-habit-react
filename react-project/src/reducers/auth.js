import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, SIGNUP_SUCCESS, SIGNUP_FAIL
} from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuthenticated: true,
                token: payload.token,
                user: payload
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                user: null
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case SIGNUP_FAIL:
        case LOGOUT:
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