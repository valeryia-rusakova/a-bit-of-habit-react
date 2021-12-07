import { combineReducers } from 'redux';
import auth from './auth';
import posts from "./posts";
import habits from "./habits";

export const rootReducer = combineReducers({
    auth,
    posts,
    habits
});