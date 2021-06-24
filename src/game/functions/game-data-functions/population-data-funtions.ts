import { gameData } from '../../settings/game-data/game-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getPopulationChartData() {
    if (GameSpecifications.currentDecisionsPeriod != null) {
        let startYear = GameSpecifications.currentDecisionsPeriod.year_start;
        const endYear = GameSpecifications.currentDecisionsPeriod.year_end;
        
        for (let i = 0; i < gameData.indicatorsDataChart.populationDataChart.years.length; i++ ) {
            if (startYear <= endYear) {
                gameData.indicatorsDataChart.populationDataChart.values[i] = populationYearsValues.years[i];
                startYear++;
            }
        }
    }
}

export const populationYearsValues = {
    years: [2020,
      2021,
      2022,
      2023,
      2024,
      2025,
      2026,
      2027,
      2028,
      2029,
      2030,
      2031,
      2032,
      2033,
      2034,
      2035,
      2036,
      2037,
      2038,
      2039,
      2040,
      2041,
      2042,
      2043,
      2044,
      2045,
      2046,
      2047,
      2048,
      2049,
      2050,
    ],
    values: [
      51553,
      52760,
      53965,
      55170,
      56377,
      57583,
      58788,
      59993,
      61201,
      62406,
      63611,
      64817,
      66023,
      67228,
      68434,
      69640,
      70846,
      72052,
      73257,
      74463,
      75669,
      76875,
      78081,
      79286,
      80492,
      81698,
      82904,
      84110,
      85315,
      86521,
      87727,
    ] 
}
  