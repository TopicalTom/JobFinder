import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFail = createAction('LOGIN_FAIL');
export const RETRIEVE_JOBS = createAction('RETRIEVE_JOBS');