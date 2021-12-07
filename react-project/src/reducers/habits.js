import {habitConstants} from "../actions/types";

const initialState = {
    allHabits: [],
    userHabits: []
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case habitConstants.GET_ALL_HABITS_SUCCESS:
            return {
                ...state,
                allHabits: payload
            }
        case habitConstants.GET_ALL_HABITS_FAIL:
            return{
                ...state,
                allHabits: null
            }
         case habitConstants.GET_USER_HABITS_SUCCESS:
            return {
                ...state,
                userHabits: payload
            }
        case habitConstants.GET_USER_HABITS_FAIL:
            return{
                ...state,
                userHabits: null
            }
        default:
            return state;
    }
}