import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginFormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  private get username(): string {
    return this.loginFormGroup.controls.username.value || '';
  }

  private get password(): string {
    return this.loginFormGroup.controls.password.value || '';
  }

  constructor(private readonly loginService: LoginService, private readonly router: Router) {
  }

  public login = (): void => {
    if (this.loginFormGroup.valid) {
      this.loginService.login(this.username, this.password).subscribe(() => {
        this.router.navigate(['private', 'sensor']);
      }, () => {
        this.loginFormGroup.setErrors({ 'unauthorized': true });
      });
    }
  }
}
