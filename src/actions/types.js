import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFail = createAction('LOGIN_FAIL');
export const RETRIEVE_JOBS = createAction('RETRIEVE_JOBS');
export const LIKE_JOB = createAction('LIKE_JOB');
export const CLEAR_LIKED_JOBS = createAction('CLEAR_LIKED_JOBS');