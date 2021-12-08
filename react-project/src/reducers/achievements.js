import {achievementConstants} from "../actions/types";

const initialState = {
    userAchievements: []
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case achievementConstants.GET_USER_ACHIEVEMENTS_SUCCESS:
            return {
                ...state,
                userAchievements: payload
            }
        case achievementConstants.GET_USER_ACHIEVEMENTS_FAIL:
            return{
                ...state,
                userAchievements: null
            }
        default:
            return state;
    }
}