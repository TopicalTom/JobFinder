import { createReducer } from '@reduxjs/toolkit';
import {
    loginSuccess,
    loginFail
} from '../actions/types';

export default authReducer = createReducer(initialState = { user: null }, {
    [loginSuccess]: (state, action) => {
        return { user: action.payload };
    },
    [loginFail]: state => {
        return { user: null };
    }
});