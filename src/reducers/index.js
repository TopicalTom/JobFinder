import { combineReducers } from 'redux';
import authentication from './authReducer';
import jobs from './jobsReducer';
import likes from './likesReducer';

export default combineReducers({
    authentication,
    jobs,
    likes
});