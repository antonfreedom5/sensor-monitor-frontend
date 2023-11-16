import { createReducer, on } from '@ngrx/store';

import { UserStateModel } from "./user-state.model";
import { resetUser, setBasicAuthToken, setUserInfo } from "./user.actions";

const initialState: UserStateModel = {
  userInfo: { username: '', roles: [] },
  basicAuthToken: ''
};

export const userReducer = createReducer(
  initialState,
  on(setUserInfo, (state, { userInfo }) => ({ ...state, userInfo })),
  on(setBasicAuthToken, (state, { basicAuthToken }) => ({ ...state, basicAuthToken })),
  on(resetUser, () => ({ ...initialState }))
);
