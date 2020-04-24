import { Component, OnInit } from '@angular/core';
import {AdminAuthService} from "../services/admin-auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2018', '2019', '2020'];

  public barChartType = 'line';

  public barChartLegend = true;

  public barChartData = [
    {data: [67, 50, 45 ], label: 'Динаміка поповнення фондів'},
  ];


  public barChartOptions1 = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels1 = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П`ятниця', 'Субота', 'Неділя'];

  public barChartType1 = 'bar';

  public barChartLegend1 = true;

  public barChartData1 = [
    {data: [67, 50, 45, 39, 100, 23, 44 ], label: 'Динаміка відвідуваності за минулий тиждень'},
  ];

  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels2 = ['Фонд справ постійного зберігання', 'Пенсійний фонд'];

  public barChartType2 = 'pie';

  public barChartLegend2 = true;

  public barChartData2 = [
    {data: [10000, 4530]},
  ];

  addFondVisible = false;

  constructor(
    private adminAuthService: AdminAuthService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.adminAuthService.purgeAuth();
  }
}
