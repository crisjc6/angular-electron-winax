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

