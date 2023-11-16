import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { UserService } from "../../../../services/user.service";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private readonly userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['private', 'sensor']);
      return false;
    }
    return true;
  }
}
