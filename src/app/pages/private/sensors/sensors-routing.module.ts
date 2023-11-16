import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SensorListComponent } from "./components/sensor-list/sensor-list.component";
import { SensorEditComponent } from "./components/sensor-edit/sensor-edit.component";

const routes: Routes = [
  {
    path: '',
    component: SensorListComponent
  },
  {
    path: 'edit',
    component: SensorEditComponent
  },
  {
    path: 'edit/:id',
    component: SensorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensorsRoutingModule {
}
