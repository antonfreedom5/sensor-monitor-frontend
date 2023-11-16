import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicComponent} from "./public.component";
import { LoginModule } from "./login/login.module";
import { PublicRoutingModule } from "./public-routing.module";
import { LoginGuard } from "./login/guards/login.guard";

@NgModule({
  declarations: [PublicComponent],
  providers: [LoginGuard],
  imports: [CommonModule, PublicRoutingModule]
})
export class PublicModule {}
