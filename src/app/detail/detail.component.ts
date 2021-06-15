import {WeapService} from "../shared/services/weap-service";
import {ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexResponsive,
  ApexYAxis,
  ApexDataLabels,
} from "ng-apexcharts";
import { phaserGameConfigMap } from '../../game/settings/phaser-game-config-specifications-map';
import {CsvService} from "../shared/services/csv.service";
import {gameRouterLink, servicioGraficaAC} from "../../game/settings/game-system-specifications";
import {CargandoService} from "../shared/services/cargando.service";
import {GraficaAreaConvervacionService} from "../shared/services/grafica-area-convervacion.service";
import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  responsive: ApexResponsive[];
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptionsAC: Partial<ChartOptions>;
  private game: Phaser.Game;
  graficaAreaConservacion;
  bloqueado = false;
  puntajeAreaConservacion;
  constructor(private router: Router,
              private weapService: WeapService,
              private csvService: CsvService,
              private readonly _cargandoService: CargandoService,
              private graficaAreaConservacioService: GraficaAreaConvervacionService,
  ) {
    gameRouterLink.routerLink = this.router;
    servicioGraficaAC.serviceArea = graficaAreaConservacioService;

    this.csvService.printdirname();
    this.graficaAreaConservacion = this.graficaAreaConservacioService.exportarDataXY().conservationAreasData;
    this.puntajeAreaConservacion = this.graficaAreaConservacioService.exportarDataXY().indicatorsScores.conservationArea;
    this.chartOptionsAC = {
      series: [
        {
          name: "Area Conservación",
          data: this.graficaAreaConservacion.area
        }
      ],
      title: {
        text: "Áreas de Conservación",
        align: "left"
      },
      chart: {
        height: 160 ,
        type: "area",
        toolbar: {
          show: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        // categories: this.graficaAreaConservacion.year
        categories: this.graficaAreaConservacion.year
      },
      yaxis: {
        title: {
          text: "Hectáreas (Ha)"
        }
      }
    };
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 160 ,
        type: "line",
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
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

  ngOnInit(): void {
    this.game = new Phaser.Game(phaserGameConfigMap);
    this.escucharCambiosGraficaAC();
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
  escucharCambiosGraficaAC(){
    this.graficaAreaConservacioService.seActualizoDatos
      .subscribe((cambio)=>{
        if(cambio == true) {
          console.log('cambios true');
          this. graficaAreaConservacion = this.graficaAreaConservacioService.exportarDataXY().conservationAreasData;
          this.puntajeAreaConservacion = this.graficaAreaConservacioService.exportarDataXY().indicatorsScores.conservationArea;
          // this.chartOptionsAC.series.data = this.graficaAreaConservacion.area;
          // this.chartOptionsAC.series.data = this.graficaAreaConservacion.area;
          this.chartOptionsAC = {
            series: [
              {
                name: "Area Conservación",
                data: this.graficaAreaConservacion.area
              }
            ],
            title: {
              text: "Áreas de Conservación",
              align: "left"
            },
            chart: {
              height: 160 ,
              type: "area",
              toolbar: {
                show: true
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              // categories: this.graficaAreaConservacion.year
              categories: this.graficaAreaConservacion.year
            },
            yaxis: {
              title: {
                text: "Hectáreas (Ha)"
              }
            }
          };
        }
      })
  }

}
