import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { SensorModel } from "../models/sensor.model";
import { APP_CONSTANTS } from "../../../../constants/app.constants";
import { PageResultModel } from "../models/page-result.model";

@Injectable()
export class SensorHttpService {

  constructor(private readonly httpClient: HttpClient) {}

  public search = (phrase: string, page: number, size: number): Observable<PageResultModel<SensorModel>> =>
    this.httpClient.post<PageResultModel<SensorModel>>(APP_CONSTANTS.BASE_API + `v1/sensor/search?page=${page}&size=${size}`, phrase);

  public getById = (id: number): Observable<SensorModel> => this.httpClient.get<SensorModel>(APP_CONSTANTS.BASE_API + 'v1/sensor/' + id);

  public save = (sensor: SensorModel): Observable<void> => this.httpClient.post<void>(APP_CONSTANTS.BASE_API + 'v1/sensor/save', sensor);

  public delete = (id: number): Observable<void> => this.httpClient.delete<void>(APP_CONSTANTS.BASE_API + 'v1/sensor/' + id);
}
