import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { UserModel } from "../../pages/public/login/models/user.model";
import { UserService } from "../user.service";

@Injectable()
export class UserResolver implements Resolve<UserModel> {
  constructor(private readonly userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserModel> {
    return this.userService.getCurrent();
  }
}
