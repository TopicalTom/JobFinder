import axios from 'axios';
import {
    RETRIEVE_JOBS, 
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from './types';

const JOB_ROOT_URL = 'https://jobs.github.com/positions.json?'

export const retrieveJobs = (region, callback) => async (dispatch) => {
    try {
        const url = `${JOB_ROOT_URL}lat=${region.latitude}&long=${region.longitude}`;
        let { data } = await axios.get(url);
        dispatch({ 
            type: RETRIEVE_JOBS, 
            payload: data
        });
        callback();
    } catch (err) {
        console.error(err)
    }
};

export const likeJob = job => dispatch => {
    dispatch({
        type: LIKE_JOB, 
        payload: job
    })
};

export const clearLikedJobs = () => dispatch => {
    dispatch({
        type: CLEAR_LIKED_JOBS 
    })
};