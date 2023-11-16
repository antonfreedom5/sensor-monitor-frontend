import { createFeatureSelector, createSelector } from "@ngrx/store";

import { USER_STATE_NAME, UserStateModel } from "./user-state.model";

export const userState = createFeatureSelector<UserStateModel>(USER_STATE_NAME);

export const selectUser = createSelector(userState, ({ userInfo }) => userInfo);

export const selectBasicAuthToken = createSelector(userState, ({ basicAuthToken }) => basicAuthToken);

