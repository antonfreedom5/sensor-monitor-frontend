import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { map, mergeMap, Observable, of, tap } from "rxjs";

import { UserModel } from "../pages/public/login/models/user.model";
import { selectUser } from "../stores/user/user.selectors";
import { ROLES } from "../constants/roles.constants";
import { loadUser } from "../stores/user/user.actions";
import { STORAGE_CONSTANTS } from "../constants/storage.constants";

@Injectable()
export class UserService {

  constructor(private readonly store: Store) {}

  public getUsername = (): Observable<string> => this.getCurrent().pipe(map(user => user.username));

  public getCurrent = (): Observable<UserModel> => this.store.select(selectUser).pipe(
    tap(user => !user.username && this.store.dispatch(loadUser())),
    mergeMap(user => !user ? this.store.select(selectUser) : of(user))
  );

  public getBasicAuthToken = (): string => localStorage.getItem(STORAGE_CONSTANTS.BASIC_AUTH_TOKEN_KEY);

  public isLoggedIn = (): boolean => !!this.getBasicAuthToken();

  public isAdmin = (): Observable<boolean> => this.getCurrent().pipe(map(user => user.roles.includes(ROLES.ADMIN)));
}
