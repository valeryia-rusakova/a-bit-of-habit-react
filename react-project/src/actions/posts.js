import axios from "axios";
import configData from "../config.json";
import {postConstants} from "./types";


export const get_all_posts = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/posts/`, config);

        dispatch({
            type: postConstants.GET_ALL_POSTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: postConstants.GET_ALL_POSTS_FAIL
        });
    }
};


export const get_post = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/posts/${id}`, config);

        dispatch({
            type: postConstants.GET_POST_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: postConstants.GET_POST_FAIL
        });
    }
};


export const add_post = (post) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    const data = JSON.stringify(post);
    try {
        const res = await axios.post(`${configData.API_HOST}/posts/`, data, config);
        dispatch({
            type: postConstants.ADD_POST_SUCCESS,
            payload: res.data
        });
        dispatch(get_all_posts());
    } catch (error) {
        dispatch({
            type: postConstants.ADD_POST_FAIL
        });
    }

};

export const delete_post = (id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        await axios.delete(`${configData.API_HOST}/posts/${id}`, config);

        dispatch({
            type: postConstants.DELETE_POST_SUCCESS,
        });
        dispatch(get_all_posts());
    } catch (err) {
        dispatch({
            type: postConstants.DELETE_POST_FAIL
        });
    }
};

export const update_post = (id, post) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    const data = JSON.stringify(post);
    try {
        const res = await axios.put(`${configData.API_HOST}/posts/${id}/`, data, config);

        dispatch({
            type: postConstants.UPDATE_POST_SUCCESS,
            payload: res.data
        });
        dispatch(get_all_posts());
    } catch (err) {
        dispatch({
            type: postConstants.UPDATE_POST_FAIL
        });
    }
};
