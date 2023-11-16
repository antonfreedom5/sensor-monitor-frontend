import { TypeModel } from "./type.model";

export interface SensorModel {
  id?: number,
  name: string,
  model: string,
  from?: number,
  to?: number,
  type: TypeModel,
  unit: TypeModel,
  location?: string,
  description: string
}
