import axios from "axios";
import configData from "../config.json";
import {commentConstants} from "./types";


export const get_all_comments = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/comments/`, config);

        dispatch({
            type: commentConstants.GET_ALL_COMMENTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: commentConstants.GET_ALL_COMMENTS_FAIL
        });
    }
};

export const add_comment = (comment) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    const data = JSON.stringify(comment);
    try {
        const res = await axios.post(`${configData.API_HOST}/comments/`, data, config);
        dispatch({
            type: commentConstants.ADD_COMMENT_SUCCESS,
            payload: res.data
        });
        dispatch(get_all_comments());
    } catch (error) {
        dispatch({
            type: commentConstants.ADD_COMMENT_FAIL
        });
    }
};
