import {postConstants} from "../actions/types";

const initialState = {
    allPosts: [],
    singlePost: null,
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case postConstants.GET_ALL_POSTS_SUCCESS:
            return {
                ...state,
                allPosts: payload
            }
        case postConstants.GET_ALL_POSTS_FAIL:
            return{
                ...state,
                allPosts: null
            }
        case postConstants.GET_POST_SUCCESS:
            return {
                ...state,
                singlePost: payload
            }
        case postConstants.GET_POST_FAIL:
            return {
                ...state,
                singlePost: null
            }
        case postConstants.UPDATE_POST_SUCCESS:
        case postConstants.UPDATE_POST_FAIL:
        case postConstants.DELETE_POST_SUCCESS:
        case postConstants.DELETE_POST_FAIL:
        case postConstants.ADD_POST_SUCCESS:
        case postConstants.ADD_POST_FAIL:
            return{
                ...state
            }
        default:
            return state;
    }
}