import {commentConstants} from "../actions/types";

const initialState = {
    allComments: []
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case commentConstants.GET_ALL_COMMENTS_SUCCESS:
            return {
                ...state,
                allComments: payload
            }
        case commentConstants.GET_ALL_COMMENTS_FAIL:
            return{
                ...state,
                allComments: null
            }
        case commentConstants.ADD_COMMENT_SUCCESS:
        case commentConstants.ADD_COMMENT_FAIL:
            return{
                ...state
            }
        default:
            return state;
    }
}