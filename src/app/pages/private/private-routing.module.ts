import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sensor',
    pathMatch: 'full'
  },
  {
    path: 'sensor',
    loadChildren: () => import('./sensors/sensor.module').then(({ SensorModule }) => SensorModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
