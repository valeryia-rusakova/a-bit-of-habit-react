import { combineReducers } from 'redux';
import auth from './auth';
import posts from "./posts";

export const rootReducer = combineReducers({
    auth,
    posts
});