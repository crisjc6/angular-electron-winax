import { GameScoreDataInterface, GameScoresinterface } from "../../interfaces/game-score-interface"
import { DataChartInterface } from "../../interfaces/game-data-chart-interface"
import { IndicatorsDataChartsInterface, IndicatorsPeriodDataInterface } from "../../interfaces/indicators-data-interface"

export enum PeriodsIdStrings {
  PERIOD_20_30_ID = 'Periodo20_30',
  PERIOD_30_40_ID = 'Periodo30_40',
  PERIOD_40_50_ID = 'Periodo40_50',
}

export const _periodScoreDefault: {
  periodId: string;
  score: number
} [] = [
  {
    periodId: PeriodsIdStrings.PERIOD_20_30_ID,
    score: 0
  },
  {
    periodId: PeriodsIdStrings.PERIOD_30_40_ID,
    score: 0
  },
  {
    periodId: PeriodsIdStrings.PERIOD_40_50_ID,
    score: 0
  }
]

export const _gameScoresDefault: GameScoresinterface = {
  periodDataIds: [],
  totalScore: 0,
  conservationAreaScores: {
    indicatorTotalScore: 0,
    periodScores: JSON.parse(JSON.stringify(_periodScoreDefault))
  },
  hydroelectricTurbineScores: {
    indicatorTotalScore: 0,
    periodScores: JSON.parse(JSON.stringify(_periodScoreDefault))
  },
  demandSiteScores: {
    indicatorTotalScore: 0,
    periodScores: JSON.parse(JSON.stringify(_periodScoreDefault))
  },
  helpcareRiverScores: {
    indicatorTotalScore: 0,
    periodScores: JSON.parse(JSON.stringify(_periodScoreDefault))
  }
}

export const _dataChartDefault: DataChartInterface = {
  years: [2020,2021,2022,2023,2024,2025,2026,2027,2028, 2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050],
  values: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

export const _indicatorsDataChartDefault: IndicatorsDataChartsInterface = {
  periodDataIds: [],
  conservationAreaDataChart: JSON.parse(JSON.stringify(_dataChartDefault)),
  hydroelectricTurbineDataChart: JSON.parse(JSON.stringify(_dataChartDefault)),
  demandSiteDataChart: {
      plantaProcesadoraLeche: JSON.parse(JSON.stringify(_dataChartDefault)),
      plantaProcesadoraPapa: JSON.parse(JSON.stringify(_dataChartDefault)),
      plantacionUvilla: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC1: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC2: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC3: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC4: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC5: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC6: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC7: JSON.parse(JSON.stringify(_dataChartDefault)),
      riegoC8: JSON.parse(JSON.stringify(_dataChartDefault))
  },
  helpcareRiverDataChart: JSON.parse(JSON.stringify(_dataChartDefault))
}

export const _periodDataDefault = {
  'Periodo20_30' : {
    id: 'Periodo20_30',
    year_start: 2020,
    year_end: 2030,
    unit: '',
    period_percent: 0,
    years:{
        2020 : {
        year_id: 2020,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months : {
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2021 : {
        year_id: 2021,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2022 : {
        year_id: 2022,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2023 : {
        year_id: 2023,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2024 : {
        year_id: 2024,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2025 : {
        year_id: 2025,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2026 : {
        year_id: 2026,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }

      },
      2027 : {
        year_id: 2027,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2028 : {
        year_id: 2028,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }

      },
      2029 : {
        year_id: 2029,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }

      },
      2030 : {
        year_id: 2300,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }

      }
    }
  },
  'Periodo30_40' : {
    id: 'Periodo30_40',
    year_start: 2031,
    year_end: 2040,
    unit: '',
    period_percent:0,
    years:{
      2031 : {
        year_id: 2031,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2032 : {
        year_id: 2032,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2033 : {
        year_id: 2033,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2034 : {
        year_id: 2034,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2035 : {
        year_id: 2035,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2036 : {
        year_id: 2036,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2037 : {
        year_id: 2037,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2038 : {
        year_id: 238,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2039 : {
        year_id: 2039,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2040 : {
        year_id: 2040,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      }
    }
  },
  'Periodo40_50' : {
    id: 'Periodo40_50',
    year_start: 2041,
    year_end: 2050,
    unit: '',
    period_percent:0,
    years:{
      2041 : {
        year_id: 2041,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2042 : {
        year_id: 2042,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2043 : {
        year_id: 2043,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2044 : {
        year_id: 2044,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2045 : {
        year_id: 2045,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2046 : {
        year_id: 2046,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2047 : {
        year_id: 2047,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2048 : {
        year_id: 2048,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2049 : {
        year_id: 2049,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      },
      2050 : {
        year_id: 2050,
        month_start: 1,
        month_end: 12,
        year_value: 0,
        months:{
          1 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 0,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 0,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 0,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 0,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 0,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 0,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 0,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 0,
            percent_month : 0
          },
          10 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          11 : {
            id_month : 1,
            value_month : 0,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 0,
            percent_month : 0
          }
        }
      }
    }
  }
}

export const _indicatorsPeriodDataDefault: IndicatorsPeriodDataInterface = {
  periodDataIds: [],
  conservationAreaPeriodData: JSON.parse(JSON.stringify(_periodDataDefault)),
  hydroelectricTurbinePeriodData: JSON.parse(JSON.stringify(_periodDataDefault)),
  demandSitePeriodData: {
      plantaProcesadoraLeche: JSON.parse(JSON.stringify(_periodDataDefault)),
      plantaProcesadoraPapa: JSON.parse(JSON.stringify(_periodDataDefault)),
      plantacionUvilla: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC1: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC2: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC3: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC4: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC5: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC6: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC7: JSON.parse(JSON.stringify(_periodDataDefault)),
      riegoC8: JSON.parse(JSON.stringify(_periodDataDefault)),
  },
  helpcareRiverPeriodData: JSON.parse(JSON.stringify(_periodDataDefault))
}

export const _playerDataDefault: GameScoreDataInterface = {
  id: 0,
  score: 0,
  teamName: 'crisweb.me'
}

export const _gameDataDefault: {
  playerDataDefault: GameScoreDataInterface,
  indicatorsPeriodData: any,
  indicatorsDataChart: any,
  gameScores: GameScoresinterface
} = {
  playerDataDefault: JSON.parse(JSON.stringify(_playerDataDefault)),
  indicatorsPeriodData: JSON.parse(JSON.stringify(_indicatorsPeriodDataDefault)),
  indicatorsDataChart: JSON.parse(JSON.stringify(_indicatorsDataChartDefault)),
  gameScores: JSON.parse(JSON.stringify(_gameScoresDefault))
}

// export const _idealFlowPeriodChartDataDefault: DataChartInterface = {
//   years: [2020,2021,2022,2023,2024,2025,2026,2027,2028, 2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050],
//   values: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// }

export const _idealFlowPeriodData = {
  'Periodo20_30' : {
    id: 'Periodo20_30',
    year_start: 2020,
    year_end: 2030,
    unit: '',
    period_percent: 0,
    years:{
        2020 : {
        year_id: 2020,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2021 : {
        year_id: 2021,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2022 : {
        year_id: 2022,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2023 : {
        year_id: 2023,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2024 : {
        year_id: 2024,
        month_start: 1,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2025 : {
        year_id: 2025,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2026 : {
        year_id: 2026,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2027 : {
        year_id: 2027,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2028 : {
        year_id: 2028,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2029 : {
        year_id: 2029,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2030 : {
        year_id: 2300,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      }
    }
  },
  'Periodo30_40' : {
    id: 'Periodo30_40',
    year_start: 2031,
    year_end: 2040,
    unit: '',
    period_percent:0,
    years:{
      2031 : {
        year_id: 2031,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2032 : {
        year_id: 2032,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2033 : {
        year_id: 2033,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2034 : {
        year_id: 2034,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2035 : {
        year_id: 2035,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2036 : {
        year_id: 2036,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2037 : {
        year_id: 2037,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2038 : {
        year_id: 238,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2039 : {
        year_id: 2039,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2040 : {
        year_id: 2040,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      }
    }
  },
  'Periodo40_50' : {
    id: 'Periodo40_50',
    year_start: 2041,
    year_end: 2050,
    unit: '',
    period_percent:0,
    years:{
      2041 : {
        year_id: 2041,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2042 : {
        year_id: 2042,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2043 : {
        year_id: 2043,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2044 : {
        year_id: 2044,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2045 : {
        year_id: 2045,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2046 : {
        year_id: 2046,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2047 : {
        year_id: 2047,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2048 : {
        year_id: 2048,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2049 : {
        year_id: 2049,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      },
      2050 : {
        year_id: 2050,
        month_start: 1,
        month_end: 12,
        year_value: 1.715, // = 20.581 / 12
        months : {
          1 : {
            id_month : 1,
            value_month : 1.766,
            percent_month : 0
          },
          2 : {
            id_month : 2,
            value_month : 2.136,
            percent_month : 0
          },
          3 : {
            id_month : 3,
            value_month : 2.015,
            percent_month : 0
          },
          4 : {
            id_month : 4,
            value_month : 2.538,
            percent_month : 0
          },
          5 : {
            id_month : 5,
            value_month : 2.456,
            percent_month : 0
          },
          6 : {
            id_month : 6,
            value_month : 1.667,
            percent_month : 0
          },
          7 : {
            id_month : 7,
            value_month : 1.346,
            percent_month : 0
          },
          8 : {
            id_month : 8,
            value_month : 1.303,
            percent_month : 0
          },
          9 : {
            id_month : 9,
            value_month : 1.373,
            percent_month : 0
          },
          10 : {
            id_month : 10,
            value_month : 1.282,
            percent_month : 0
          },
          11 : {
            id_month : 11,
            value_month : 1.516,
            percent_month : 0
          },
          12 : {
            id_month : 12,
            value_month : 1.182,
            percent_month : 0
          }
        }
      }
    }
  }
}

