import {
    LOGIN_SUCCESS,
    LOGIN_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGOUT,
} from "./types";
import axios from "axios";


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post(`http://localhost:8000/users/login/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const signup = (username, email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, email, password});

    try {
        const res = await axios.post(`http://localhost:8000/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
};
