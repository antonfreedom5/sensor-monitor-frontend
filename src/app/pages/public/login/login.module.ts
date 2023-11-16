import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from "./services/login.service";
import { LoginHttpService } from "./services/login-http.service";
import { MaterialModule } from "../../../material.module";
import { LoginComponent } from "./login.component";

@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService, LoginHttpService],
    imports: [CommonModule, MaterialModule]
})
export class LoginModule {
}
