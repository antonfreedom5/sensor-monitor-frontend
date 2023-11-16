import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { USER_STATE_NAME, UserStateModel } from "./user/user-state.model";
import { userReducer } from "./user/user.reducer";

export interface State {
  [USER_STATE_NAME]: UserStateModel;
}

export const reducers: ActionReducerMap<State> = {
  [USER_STATE_NAME]: userReducer
};

export const metaReducers: MetaReducer<State>[] = [];
