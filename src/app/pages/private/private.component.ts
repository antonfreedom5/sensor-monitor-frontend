import { Component } from '@angular/core';
import { Observable } from "rxjs";

import { UserService } from "../../services/user.service";
import { LoginService } from "../public/login/services/login.service";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss'
})
export class PrivateComponent {

  get username(): Observable<string> {
    return this.userService.getUsername();
  }

  constructor(private readonly userService: UserService, private readonly loginService: LoginService) {}

  public logout = (): void => {
    this.loginService.logout();
  }
}
