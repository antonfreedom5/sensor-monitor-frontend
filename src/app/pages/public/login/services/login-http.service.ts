import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { UtilService } from "../../../../services/util.service";
import { UserModel } from "../models/user.model";
import { APP_CONSTANTS } from "../../../../constants/app.constants";

@Injectable()
export class LoginHttpService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public login = (username: string, password: string): Observable<UserModel> =>
    this.httpClient.post<UserModel>(APP_CONSTANTS.BASE_API + 'v1/user/login', {}, { headers: { authorization: UtilService.createBasicAuthToken(username, password) } });

  public logout = (): Observable<void> => this.httpClient.post<void>(APP_CONSTANTS.BASE_API + 'logout', {});
}
