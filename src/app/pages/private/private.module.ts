import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateComponent } from "./private.component";
import { PrivateRoutingModule } from "./private-routing.module";
import { MaterialModule } from "../../material.module";
import { SensorModule } from "./sensors/sensor.module";

@NgModule({
  declarations: [PrivateComponent],
  imports: [CommonModule, PrivateRoutingModule, MaterialModule, SensorModule]
})
export class PrivateModule {}
