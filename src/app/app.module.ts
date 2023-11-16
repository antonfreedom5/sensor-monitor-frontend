import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./stores/user/user.effects";
import { metaReducers, reducers } from "./stores";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { httpInterceptorProviders } from "./services/interceptors";
import { AuthGuard } from "./pages/private/guards/auth.guard";
import { UserService } from "./services/user.service";
import { UserResolver } from "./services/resolvers/user.resolver";
import { LoginService } from "./pages/public/login/services/login.service";
import { LoginModule } from "./pages/public/login/login.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    })],
  providers: [httpInterceptorProviders, UserService, AuthGuard, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
