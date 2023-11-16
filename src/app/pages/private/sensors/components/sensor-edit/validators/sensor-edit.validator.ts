import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { isNumber } from "lodash";

@Injectable()
export class SensorEditValidator {
  isToMoreThanLess() {
    return (formGroup: FormGroup): {} => {
      const from = formGroup.controls?.['from'].value;
      const to = formGroup.controls?.['to'].value;
      if ((isNumber(to) && !isNumber(from)) || (!isNumber(to) && isNumber(from)) || from > to) {
        return { toLessThanFrom: true };
      }
      return {};
    };
  }
}
