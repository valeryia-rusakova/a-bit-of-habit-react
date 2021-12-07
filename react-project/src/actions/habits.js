import axios from "axios";
import configData from "../config.json";
import {habitConstants, imageConstants} from "./types";


export const get_all_habits = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/habits/`, config);

        dispatch({
            type: habitConstants.GET_ALL_HABITS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: habitConstants.GET_ALL_HABITS_FAIL
        });
    }
};

export const add_habit = (habit) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const data = {habitId: habit};
        const res = await axios.post(`${configData.API_HOST}/habitUser/`, JSON.stringify(data), config);

        dispatch({
            type: habitConstants.ADD_HABIT_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: habitConstants.ADD_HABIT_FAIL,
        });
    }
};

export const daily_check = (habitUser) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const data = {habitId: habitUser};
        const res = await axios.patch(`${configData.API_HOST}/habitUser/`, JSON.stringify(data), config);

        dispatch({
            type: habitConstants.DAILY_CHECK_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: habitConstants.DAILY_CHECK_FAIL
        });
    }
};

export const get_user_habits = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/habitUser/`, config);

        dispatch({
            type: habitConstants.GET_USER_HABITS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: habitConstants.GET_USER_HABITS_FAIL
        });
    }
};

