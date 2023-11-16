import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { UserService } from "../../../services/user.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['public', 'login']);
      return false;
    }
    return true;
  }
}
