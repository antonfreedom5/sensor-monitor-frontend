import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { BehaviorSubject, filter, merge, Observable, startWith, switchMap, tap } from "rxjs";

import { SensorModel } from "../../models/sensor.model";
import { PageResultModel } from "../../models/page-result.model";
import { UserService } from "../../../../../services/user.service";
import { APP_CONSTANTS } from "../../../../../constants/app.constants";
import { SensorHttpService } from "../../services/sensor-http.service";

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrl: './sensor-list.component.scss'
})
export class SensorListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageSize = APP_CONSTANTS.PAGEABLE.SIZE;
  searchPhrase: string;
  pageResultModel: PageResultModel<SensorModel>;
  displayedColumns = new Set(['Name', 'Model', 'Type', 'Range', 'Unit', 'Location']);

  isAdmin: Observable<boolean> = this.userService.isAdmin().pipe(tap((isAdmin) => {
    if (isAdmin) this.displayedColumns.add('Edit').add('Delete');
  }));

  private updateListTrigger = new BehaviorSubject(false);

  constructor(private readonly sensorHttpService: SensorHttpService,
              private readonly router: Router,
              private readonly userService: UserService) {
  }

  ngAfterViewInit(): void {
    merge(this.paginator.page, this.updateListTrigger)
      .pipe(
        filter((it) => !!it),
        startWith({}),
        switchMap(() => this.sensorHttpService.search(this.searchPhrase || '', this.paginator.pageIndex, this.paginator.pageSize))
      ).subscribe(pageResult => this.pageResultModel = pageResult);
  };

  public create = (id = ''): void => {
    const commands = ['private', 'sensor', 'edit'];
    if (id) commands.push(id);
    this.router.navigate(commands);
  }

  public search = (): void => {
    this.paginator.firstPage();
    this.updateListTrigger.next(true);
  }

  public resetSearch = (): void => {
    this.searchPhrase = '';
    this.search();
  }

  public delete(id: number) {
    this.sensorHttpService.delete(id).subscribe(() => this.updateListTrigger.next(true));
  }
}
