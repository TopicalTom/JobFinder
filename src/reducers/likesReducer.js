import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';
import { PERSIST_REHYDRATE } from 'redux-persist';
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types';

export default jobsReducer = createReducer(initialState = [], {
    [PERSIST_REHYDRATE]: (state, action) => {
        return action.payload.likes || [];
    },
    [LIKE_JOB]: (state, action) => {
        return _.uniqBy([ action.payload, ...state ], action.payload.id);
    },
    [CLEAR_LIKED_JOBS]: () => {
        return [];
    },
});