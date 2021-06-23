import {WeapService} from "../shared/services/weap-service";
import {ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexResponsive,
  ApexYAxis,
  ApexTooltip,
  ApexDataLabels,
  ApexAnnotations
} from "ng-apexcharts";
import { phaserGameConfigMap } from '../../game/settings/phaser-game-config-specifications-map';
import {CsvService} from "../shared/services/csv.service";
import {gameRouterLink, servicioGraficaAC} from "../../game/settings/game-system-specifications";
import {CargandoService} from "../shared/services/cargando.service";
import {GraficaAreaConvervacionService} from "../shared/services/grafica-area-convervacion.service";
import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {DataChartInterface} from "../../game/interfaces/game-data-chart-interface";
import {IndicatorsDataChartsInterface} from "../../game/interfaces/indicators-data-interface"
import { GameScoresinterface } from "../../game/interfaces/game-score-interface";
import {precipitationYearsValues} from "../costantes/precipitacion";
import {populationYearsValues} from "../costantes/poblacion";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  colors?: string[];
  responsive?: ApexResponsive[];
  title?: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
  anotations?: ApexAnnotations;
  tooltip?: ApexTooltip;


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
  public chartOptionsHT: Partial<ChartOptions>;
  public chartOptionsDC: Partial<ChartOptions>;
  public chartOptionsSR: Partial<ChartOptions>;
  public chartOptionsP: Partial<ChartOptions>;
  public chartOptionsPR: Partial<ChartOptions>;
  private game: Phaser.Game;
  bloqueado = false;
  gameDataCharts: IndicatorsDataChartsInterface;
  gameDataScores: GameScoresinterface;

  constructor(private router: Router,
              private weapService: WeapService,
              // private csvService: CsvService,
              private readonly _cargandoService: CargandoService,
              private graficaAreaConservacioService: GraficaAreaConvervacionService,
  ) {
    gameRouterLink.routerLink = this.router;
    servicioGraficaAC.serviceArea = graficaAreaConservacioService;

    /**********Corregir cambiarlo a una sola llamada ***********/
    this.gameDataCharts = this.graficaAreaConservacioService.exportarDataXY().indicatorsDataChart;
    this.gameDataScores = this.graficaAreaConservacioService.exportarDataXY().gameScores;
    this.drawAllCharts(this.gameDataCharts);
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

  escucharCambiosGraficaAC() {
    this.graficaAreaConservacioService.seActualizoDatos
      .subscribe((cambio)=>{
        if(cambio == true) {
          /**********Corregir cambiarlo a una sola llamada ***********/
          this.gameDataCharts = this.graficaAreaConservacioService.exportarDataXY().indicatorsDataChart;
          this.gameDataScores = this.graficaAreaConservacioService.exportarDataXY().gameScores;
          this.drawAllCharts(this.gameDataCharts);
        }
      })
  }

  drawAllCharts(_gameDataCharts: IndicatorsDataChartsInterface) {
    this.chartOptionsAC = this.drawConservationAreaChart(_gameDataCharts.conservationAreaDataChart);
    this.chartOptionsHT = this.drawHydropowerChart(_gameDataCharts.hydroelectricTurbineDataChart);
    this.chartOptionsDC = this.drawCoverageChart(_gameDataCharts.demandSiteDataChart);
    this.chartOptionsSR = this.drawStreamFlowChart(_gameDataCharts.helpcareRiverDataChart);
    this.chartOptionsPR = this.precipitationChart(precipitationYearsValues);
    this.chartOptionsP = this.populationChart(populationYearsValues);
  }

  drawConservationAreaChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Area Conservación (ACUS)',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Áreas de Conservación',
        align: 'left'
      },
      chart: {
        height: 200,
        type: 'area',
        toolbar: {
          show: true,
        },

      },
      colors: ['#e2bf41', '#545454'],
      dataLabels: {
        enabled: false,
      },
      anotations : {
        xaxis: [
          {
            x: 2030,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P1"
            },
          },
          {
            x: 2040,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P2"
            },
          },
          {
            x: 2050,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P3"
            },
          },
        ]
      },
      xaxis: {
        categories: _dataSet.years,
      },
      yaxis: {
        title: {
          text: 'Hectáreas (Ha)'
        }
      }
    }
  }

  drawHydropowerChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Hidroenergía',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Hidroenergía (Hidroeléctrica)',
        align: 'left'
      },
      chart: {
        height: 200,
        type: 'area',
        toolbar: {
          show: true,
        }
      },
      colors: ['#2eeed7'],
      dataLabels: {
        enabled: false,
      },
      anotations : {
        xaxis: [
          {
            x: 2030,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P1"
            },
          },
          {
            x: 2040,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P2"
            },
          },
          {
            x: 2050,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P3"
            },
          },
        ]
      },
      xaxis: {
        categories: _dataSet.years,
      },
      yaxis: {
        title: {
          text: 'Caudal (m3/s)',
        }
      }
    }
  }

  drawCoverageChart(_dataSet: DataChartInterface | any ): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'F. Leche',
          data: _dataSet.plantaProcesadoraLeche.values
        },
        {
          name: 'F. Papa',
          data: _dataSet.plantaProcesadoraPapa.values
        },
        {
          name: 'P. Uvilla',
          data: _dataSet.plantacionUvilla.values
        },
        {
          name: 'RC1',
          data: _dataSet.riegoC1.values
        },
        {
          name: 'RC2',
          data: _dataSet.riegoC2.values
        },
        {
          name: 'RC3',
          data: _dataSet.riegoC3.values
        },
        {
          name: 'RC4',
          data: _dataSet.riegoC4.values
        },
        {
          name: 'RC5',
          data: _dataSet.riegoC5.values
        },
        {
          name: 'RC6',
          data: _dataSet.riegoC6.values
        },
        {
          name: 'RC7',
          data: _dataSet.riegoC7.values
        },
        {
          name: 'RC8',
          data: _dataSet.riegoC8.values
        },

      ],
      title: {
        text: 'Cobertura de las demandas',
        align: 'left'
      },
      chart: {
        height: 300,
        type: 'line',
        toolbar: {
          show: true,
        }
      },
      colors: ['#77B6EA', '#545454','#E99497', '#F3C583', '#E8E46E','#B3E283', '#542E71', '#FB3640', '#FDCA40', '#A799B7', '#185ADB'],
      dataLabels: {
        enabled: false,
      },
      anotations : {
        xaxis: [
          {
            x: 2030,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P1"
            },
          },
          {
            x: 2040,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P2"
            },
          },
          {
            x: 2050,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P3"
            },
          },
        ]
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: _dataSet.riegoC7.years,
      },
      yaxis: {
        title: {
          text: 'Porcentaje (%)',
        }
      }
    }
  }

  drawStreamFlowChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Fujo del río (m3/s)',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Salud del río',
        align: 'left'
      },
      chart: {
        height: 200,
        type: 'line',
        toolbar: {
          show: true,
        }
      },
      colors: ['#008bff'],
      dataLabels: {
        enabled: false,
      },
      anotations : {
        yaxis: [
          {
            y: 1.4,
            y2: 0,
            borderColor: '#000',
            fillColor: '#fa4646'
          },
          {
            y: 5,
            y2: 1.4,
            borderColor: '#000',
            fillColor: '#8df58a'
          }
        ],
        xaxis: [
          {
            x: 2030,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P1"
            },
          },
          {
            x: 2040,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P2"
            },
          },
          {
            x: 2050,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P3"
            },
          },
        ]
      },
      xaxis: {
        categories: _dataSet.years,
      },
      yaxis: {
        title: {
          text: 'Flujo (m3/s)',
        }
      }
    }
  }
  precipitationChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Precipitación',
          data: _dataSet.values.map(
            (valor)=> {
              return +valor.toFixed(2)
            }
          )
        }
      ],
      title: {
        text: 'Precipitación',
        align: 'left'
      },
      chart: {
        height: 200,
        type: 'line',
        toolbar: {
          show: true,
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
      },
      anotations : {
        xaxis: [
          {
            x: 2030,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P1"
            },
          },
          {
            x: 2040,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P2"
            },
          },
          {
            x: 2050,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P3"
            },
          },
        ]
      },
      xaxis: {
        categories: _dataSet.years,
      },
      yaxis: {
        title: {
          text: 'Milímetros Agua (mm)',
        }
      }
    }
  }
  populationChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Población',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Población',
        align: 'left'
      },
      chart: {
        height: 200,
        type: 'bar',
        toolbar: {
          show: true,
        }
      },
      colors: ['#deec55'],
      dataLabels: {
        enabled: false,
      },
      anotations : {
        xaxis: [
          {
            x: 2030,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P1"
            },
          },
          {
            x: 2040,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P2"
            },
          },
          {
            x: 2050,
            opacity: 0.3,
            strokeDashArray: 0,
            borderColor: "#775DD0",
            label: {
              position: 'top',
              orientation: 'vertical',
              borderColor: "#775DD0",
              style: {
                color: "#fff",
                background: "#775DD0"
              },
              text: "P3"
            },
          },
        ]
      },
      xaxis: {
        type: "datetime",
        categories: _dataSet.years.map(
          (valor) => {
            return valor.toString();
          }
        ),
        tickAmount: 7
      },
      tooltip: {
        x: {
          format: "yyyy"
        }
      },
      yaxis: {
        title: {
          text: 'N° Personas',
        }
      }
    }
  }

}
