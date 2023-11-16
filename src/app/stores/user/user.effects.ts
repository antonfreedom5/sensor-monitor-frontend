import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { loadUser, resetUser, setBasicAuthToken, setUserInfo } from "./user.actions";
import { filter, map, tap } from "rxjs";
import { STORAGE_CONSTANTS } from "../../constants/storage.constants";

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store
  ) {
  }

  loadUserInfo$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadUser.type),
        map(() => JSON.parse(localStorage.getItem(STORAGE_CONSTANTS.USER_INFO_KEY))),
        filter((user) => !!user),
        map((userInfo) => setUserInfo({ userInfo }))
      )
  );

  resetUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetUser.type),
      tap(() => {
        localStorage.removeItem(STORAGE_CONSTANTS.USER_INFO_KEY);
        localStorage.removeItem(STORAGE_CONSTANTS.BASIC_AUTH_TOKEN_KEY);
      })
    ), { dispatch: false }
  );

  setUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUserInfo.type),
      tap((response) => {
        localStorage.setItem(STORAGE_CONSTANTS.USER_INFO_KEY, JSON.stringify(response?.['userInfo']));
      })
    ), { dispatch: false }
  );

  setBasicAuthKey$ = createEffect(() =>
      this.actions$.pipe(
        ofType(setBasicAuthToken.type),
        tap((response) => localStorage.setItem(STORAGE_CONSTANTS.BASIC_AUTH_TOKEN_KEY, response?.['basicAuthToken']))
      ),
    { dispatch: false }
  );
}
