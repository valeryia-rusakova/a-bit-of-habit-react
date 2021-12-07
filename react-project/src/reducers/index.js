import { combineReducers } from 'redux';
import auth from './auth';
import posts from "./posts";
import habits from "./habits";
import comments from "./comments";

export const rootReducer = combineReducers({
    auth,
    posts,
    habits
    comments
});