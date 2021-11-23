import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
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
