import { Injectable } from '@angular/core';
import { first, Observable, tap } from "rxjs";
import { Store } from "@ngrx/store";

import { LoginHttpService } from "./login-http.service";
import { resetUser, setBasicAuthToken, setUserInfo } from "../../../../stores/user/user.actions";
import { UserModel } from "../models/user.model";
import { UtilService } from "../../../../services/util.service";
import { Router } from "@angular/router";

@Injectable()
export class LoginService {

  constructor(private readonly loginHttpService: LoginHttpService,
              private readonly store: Store,
              private readonly router: Router
  ) {}

  public login = (username: string, password: string): Observable<UserModel> =>
    this.loginHttpService.login(username, password).pipe(
      first(),
      tap(userInfo => {
        this.store.dispatch(setUserInfo({ userInfo }));
        this.store.dispatch(setBasicAuthToken({ basicAuthToken: UtilService.createBasicAuthToken(username, password) }));
      })
    );

  public logout = (): void => {
    this.store.dispatch(resetUser());
    this.loginHttpService.logout().subscribe(() => this.router.navigate(['public', 'login']));
  }
}
