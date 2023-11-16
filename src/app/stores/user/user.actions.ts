import { createAction, props } from '@ngrx/store';

import { UserStateModel } from "./user-state.model";

export const resetUser = createAction('[USER_STATE_NAME] resetUser');

export const loadUser = createAction('[USER_STATE_NAME] loadUser');

export const setUserInfo = createAction('[USER_STATE_NAME] setUserInfo', props<Pick<UserStateModel, 'userInfo'>>());
export const setBasicAuthToken = createAction('[USER_STATE_NAME] setBasicAuthToken', props<Pick<UserStateModel, 'basicAuthToken'>>());

