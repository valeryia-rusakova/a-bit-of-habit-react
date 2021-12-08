import axios from "axios";
import configData from "../config.json";
import {achievementConstants} from "./types";

export const get_user_achievements = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
        }
    };
    try {
        const res = await axios.get(`${configData.API_HOST}/userAchievements/`, config);

        dispatch({
            type: achievementConstants.GET_USER_ACHIEVEMENTS_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: achievementConstants.GET_USER_ACHIEVEMENTS_FAIL
        });
    }
};
