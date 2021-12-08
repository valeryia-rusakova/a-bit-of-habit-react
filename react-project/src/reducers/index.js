import { combineReducers } from 'redux';
import auth from './auth';
import posts from "./posts";
import habits from "./habits";
import comments from "./comments";
import achievements from "./achievements";

export const rootReducer = combineReducers({
    auth,
    posts,
    habits,
    comments,
    achievements
});