import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';
import {
    LIKE_JOB
} from '../actions/types';

export default jobsReducer = createReducer(initialState = [], {
    [LIKE_JOB]: (state, action) => {
        return _.uniqBy([ action.payload, ...state ], action.payload.id);
    }
});