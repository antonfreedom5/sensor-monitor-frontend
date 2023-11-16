import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorHttpService } from "./services/sensor-http.service";
import { SensorListComponent } from "./components/sensor-list/sensor-list.component";
import { MaterialModule } from "../../../material.module";
import { SensorEditComponent } from "./components/sensor-edit/sensor-edit.component";
import { SensorsRoutingModule } from "./sensors-routing.module";
import { SensorTypeHttpService } from "./services/sensor-type-http.service";
import { SensorEditValidator } from "./components/sensor-edit/validators/sensor-edit.validator";

@NgModule({
  declarations: [SensorListComponent, SensorEditComponent],
  providers: [SensorHttpService, SensorTypeHttpService, SensorEditValidator],
  imports: [CommonModule, MaterialModule, SensorsRoutingModule]
})
export class SensorModule {}
