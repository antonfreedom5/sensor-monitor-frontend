import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { SensorHttpService } from "../../services/sensor-http.service";
import { SensorModel } from "../../models/sensor.model";
import { SensorTypeHttpService } from "../../services/sensor-type-http.service";
import { TypeModel } from "../../models/type.model";
import { SensorEditValidator } from "./validators/sensor-edit.validator";

@Component({
  selector: 'app-sensor-edit',
  templateUrl: './sensor-edit.component.html',
  styleUrl: './sensor-edit.component.scss'
})
export class SensorEditComponent implements AfterViewInit {
  sensorTypes: TypeModel[];
  unitTypes: TypeModel[];

  sensorEditGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.max(30)]),
    model: new FormControl('', [Validators.required, Validators.max(15)]),
    from: new FormControl(),
    to: new FormControl(),
    type: new FormControl(0, [Validators.required]),
    unit: new FormControl(0, [Validators.required]),
    location: new FormControl('', [Validators.max(40)]),
    description: new FormControl('', [Validators.max(200)])
  }, { validators: this.sensorEditValidator.isToMoreThanLess() });

  private get id(): number | null {
    return +this.activatedRoute.snapshot.params?.['id'];
  }

  constructor(private readonly sensorHttpService: SensorHttpService,
              private readonly sensorTypeHttpService: SensorTypeHttpService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly sensorEditValidator: SensorEditValidator,
              private readonly router: Router) {
  }

  ngAfterViewInit(): void {
    this.sensorTypeHttpService.getAll("sensor-type").subscribe(types => this.sensorTypes = types);
    this.sensorTypeHttpService.getAll("unit-type").subscribe(types => this.unitTypes = types);

    if (this.id) {
      this.sensorHttpService.getById(this.id).subscribe(sensor => {
        this.sensorEditGroup.controls.name.setValue(sensor.name);
        this.sensorEditGroup.controls.model.setValue(sensor.model);
        this.sensorEditGroup.controls.from.setValue(sensor.from);
        this.sensorEditGroup.controls.to.setValue(sensor.to);
        this.sensorEditGroup.controls.type.setValue(sensor.type.id);
        this.sensorEditGroup.controls.unit.setValue(sensor.unit.id);
        this.sensorEditGroup.controls.location.setValue(sensor?.location);
        this.sensorEditGroup.controls.description.setValue(sensor?.description);
      });
    }
  }

  public save = (): void => {
    if (this.sensorEditGroup.valid) {
      const sensorModel: SensorModel = {
        name: this.sensorEditGroup.controls.name.value,
        model: this.sensorEditGroup.controls.model.value,
        from: this.sensorEditGroup.controls.from.value,
        to: this.sensorEditGroup.controls.to.value,
        type: this.sensorTypes.find(({ id }) => id === this.sensorEditGroup.controls.type.value),
        unit: this.unitTypes.find(({ id }) => id === this.sensorEditGroup.controls.unit.value),
        location: this.sensorEditGroup.controls.location.value,
        description: this.sensorEditGroup.controls.description.value
      };
      if (this.id) sensorModel.id = this.id;
      this.sensorHttpService.save(sensorModel).subscribe(() => this.router.navigate(['private', 'sensor']));
    }
  }
}
