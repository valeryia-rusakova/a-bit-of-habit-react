import {GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAIL} from "../actions/types";

const initialState = {
    allPosts: []
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                allPosts: payload
            }
        case GET_ALL_POSTS_FAIL:
            return{
                ...state,
                allPosts: null
            }
        default:
            return state;
    }
}