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
import {CargandoService} from "../shared/services/cargando.service";

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
  bloqueado = false;

  ngOnInit(): void {
    this.escucharCambiosEnCargandoService();
  }

  constructor(private router: Router,
              private weapService: WeapService,
              private csvService: CsvService,
              private readonly _cargandoService: CargandoService,

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
  async escucharCambiosEnCargandoService() {
    await this._cargandoService
      .cambioCargando
      .subscribe(
        (cambio) => {
          this.bloqueado = cambio;
        }
      );
  }


  goPlaces() {
    this.router.navigate(['/']);
  }
  openTestDocument(): void {
    this._cargandoService.habilitarCargando();
    setTimeout (()=> {
      this.weapService.openWeap();
      this._cargandoService.deshabilitarCargando()
    },500 );
  }
  public updateSeries() {
    this.chartOptions.series = [{
      data: [23, 44, 1, 22]
    }];
  }


}
