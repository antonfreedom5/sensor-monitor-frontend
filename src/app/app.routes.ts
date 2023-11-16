import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./pages/errors/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { PrivateComponent } from "./pages/private/private.component";
import { AuthGuard } from "./pages/private/guards/auth.guard";
import { UserResolver } from "./services/resolvers/user.resolver";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full'
  },
  {
    path: 'public',
    loadChildren: () => import('./pages/public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuard],
    resolve: {
      currentUser: UserResolver
    },
    loadChildren: () => import('./pages/private/private.module').then((m) => m.PrivateModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
