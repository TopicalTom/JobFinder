import { createReducer } from '@reduxjs/toolkit';
import {
    RETRIEVE_JOBS,
} from '../actions/types';

export default jobsReducer = createReducer(initialState = { results: [] }, {
    [RETRIEVE_JOBS]: (state, action) => {
        return { results: action.payload };
    }
});