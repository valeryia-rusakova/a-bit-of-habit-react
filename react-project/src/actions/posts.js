import axios from "axios";
import {
    GET_ALL_POSTS_SUCCESS,
    GET_ALL_POSTS_FAIL,
} from "./types";
import configData from "../config.json";


export const get_all_posts = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/posts/`, config);

        dispatch({
            type: GET_ALL_POSTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ALL_POSTS_FAIL
        })
    }
};

