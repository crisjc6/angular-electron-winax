import { gameData } from '../../settings/game-data/game-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getPrecipitationChartData() {
    if (GameSpecifications.currentDecisionsPeriod != null) {
        let startYear = GameSpecifications.currentDecisionsPeriod.year_start + 0;
        const endYear = GameSpecifications.currentDecisionsPeriod.year_end + 0;
        
        for (let i = 0; i < gameData.indicatorsDataChart.precipitationDataChart.years.length; i++ ) {
            if (gameData.indicatorsDataChart.precipitationDataChart.years[i] === startYear && startYear <= endYear) {
                gameData.indicatorsDataChart.precipitationDataChart.values[i] = precipitationYearsValues.values[i];
                startYear++;
            }
        }
    }
}

export const precipitationYearsValues = {
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
      1324.41096,
      1140.640433,
      1318.137498,
      1386.454519,
      1437.41564,
      1323.967665,
      1317.110097,
      1226.914157,
      1290.624115,
      1308.887924,
      1311.329271,
      1362.049657,
      1326.144093,
      1374.375937,
      1505.00995,
      1293.332709,
      1290.112075,
      1283.540124,
      1272.931468,
      1453.051898,
      1523.185161,
      1386.851189,
      1473.678703,
      1548.66967,
      1442.687233,
      1329.10894,
      1317.407699,
      1393.516322,
      1342.592995,
      1357.019921,
      1441.093584,
    ]
}
  
