import { combineReducers } from 'redux';
import authentication from './authReducer';
import jobs from './jobsReducer';

export default combineReducers({
    authentication,
    jobs
});