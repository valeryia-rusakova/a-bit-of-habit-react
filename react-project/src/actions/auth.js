
import configData from "../config.json";
import axios from "axios";
import {authConstants} from "./types";


export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await axios.post(`${configData.API_HOST}/users/login/`, body, config);

        dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: authConstants.LOGIN_FAIL
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
        const res = await axios.post(`${configData.API_HOST}/users/`, body, config);

        dispatch({
            type: authConstants.SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: authConstants.SIGNUP_FAIL
        })
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: authConstants.LOGOUT
    });
};
