import configData from "../config.json";
import axios from "axios";
import {authConstants} from "./types";
import {toast} from "react-toastify";


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
        toast.success("You have successfully logged into the system!")
    } catch (err) {
        dispatch({
            type: authConstants.LOGIN_FAIL
        })
        toast.error("Provided credentials are not valid!")
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
        toast.success("New account was successfully registered!")
    } catch (err) {
        dispatch({
            type: authConstants.SIGNUP_FAIL
        })
        toast.error("Something went wrong! " +
            "The new account was not registered")
    }
};

export const logout = () => dispatch => {
    dispatch({
        type: authConstants.LOGOUT
    });
};
