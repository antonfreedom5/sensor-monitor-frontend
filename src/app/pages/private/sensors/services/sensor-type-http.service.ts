import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SensorType, TypeModel } from "../models/type.model";
import { APP_CONSTANTS } from "../../../../constants/app.constants";

@Injectable()
export class SensorTypeHttpService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAll = (type: SensorType): Observable<TypeModel[]> => this.httpClient.get<TypeModel[]>(APP_CONSTANTS.BASE_API + 'v1/' + type);
}
