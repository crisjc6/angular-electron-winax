import {WeapService} from "../shared/services/weap-service";
import {ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexResponsive,
} from "ng-apexcharts";
import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GameSceneIdsStrings } from '../../game/settings/game-constants-strings/game-scene-ids-string';
// import { phaserGameConfig } from './../../settings/phaser-game-config-specifications';
import { phaserGameConfig } from '../../game/settings/phaser-game-config-specifications';
import {CsvService} from "../shared/services/csv.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  responsive: ApexResponsive[];
};
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  ngOnInit(): void {
  }

  constructor(private router: Router,
              private weapService: WeapService,
              private csvService: CsvService,

  ) {
    // @ts-ignore
    this.csvService.printdirname();

    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 160 ,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      },
      responsive:
        [
          {
            breakpoint: 1000,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
    };
  }

  goPlaces() {
    this.router.navigate(['/']);
  }
  openTestDocument(): void {
    this.weapService.openWeap();
  }
  public updateSeries() {
    this.chartOptions.series = [{
      data: [23, 44, 1, 22]
    }];
  }


}
