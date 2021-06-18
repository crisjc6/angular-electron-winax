import { DataChartInterface } from "./game-data-chart-interface";

export interface IndicatorsDataChartsInterface {
  periodDataIds: string[];
  conservationAreaDataChart: DataChartInterface;
  hydroelectricTurbineDataChart: DataChartInterface;
  demandSiteDataChart: {
      plantaProcesadoraLeche: DataChartInterface;
      plantaProcesadoraPapa: DataChartInterface;
      plantacionUvilla: DataChartInterface;
      riegoC1: DataChartInterface;
      riegoC2: DataChartInterface;
      riegoC3: DataChartInterface;
      riegoC4: DataChartInterface;
      riegoC5: DataChartInterface;
      riegoC6: DataChartInterface;
      riegoC7: DataChartInterface;
      riegoC8: DataChartInterface;
  };
  helpcareRiverDataChart: DataChartInterface;
}

export interface IndicatorsPeriodDataInterface {
  periodDataIds: string[];
  conservationAreaPeriodData: any;
  hydroelectricTurbinePeriodData: any;
  demandSitePeriodData: {
      plantaProcesadoraLeche: any;
      plantaProcesadoraPapa: any;
      plantacionUvilla: any;
      riegoC1: any;
      riegoC2: any;
      riegoC3: any;
      riegoC4: any;
      riegoC5: any;
      riegoC6: any;
      riegoC7: any;
      riegoC8: any;
  };
  helpcareRiverPeriodData: any;
}
