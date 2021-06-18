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
import {DataChartInterface} from "../../game/interfaces/game-data-chart-interface";
import {IndicatorsDataChartsInterface} from "../../game/interfaces/indicators-data-interface"
import { GameScoresinterface } from "../../game/interfaces/game-score-interface";

export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  colors?: string[];
  responsive?: ApexResponsive[];
  title?: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
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
    
    /********************* Modificar para aceptar todos los riegos*****************************/
    this.chartOptionsDC = this.drawCoverageChart(_gameDataCharts.demandSiteDataChart.riegoC3);
    
    this.chartOptionsSR = this.drawStreamFlowChart(_gameDataCharts.helpcareRiverDataChart);
  }

  drawConservationAreaChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Area Conservación',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Áreas de Conservación',
        align: 'left'
      },
      chart: {
        height: 160,
        type: 'area',
        toolbar: {
          show: true,
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
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
          name: 'Hidroenergia',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Hidroenergia (Hidroelectrica)',
        align: 'left'
      },
      chart: {
        height: 160,
        type: 'area',
        toolbar: {
          show: true,
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: _dataSet.years,
      },
      yaxis: {
        title: {
          text: 'Caudal (M^3/s)',
        }
      }
    }
  }
  
  drawCoverageChart(_dataSet: DataChartInterface): Partial<ChartOptions> {
    return {
      series: [
        {
          name: 'Covertura',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Demanda cobertura del sitio ',
        align: 'left'
      },
      chart: {
        height: 160,
        type: 'area',
        toolbar: {
          show: true,
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: _dataSet.years,
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
          name: 'Fujo del rio',
          data: _dataSet.values
        }
      ],
      title: {
        text: 'Salud del rio',
        align: 'left'
      },
      chart: {
        height: 160,
        type: 'area',
        toolbar: {
          show: true,
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: _dataSet.years,
      },
      yaxis: {
        title: {
          text: 'Flujo (M^3/s)',
        }
      }
    }
  }
  
}
