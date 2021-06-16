import { GameSpecifications, IndicatorsData } from '../../settings/game-system-specifications';
import { HydropowerChartData } from '../../settings/hydropower_turbine_data';

export function getHydropowerChartData() {
  
  if (GameSpecifications.currentDecisionsPeriod != null) {
    for (let i = 0; i < HydropowerChartData.year.length; i++ ) {
      for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
        if (HydropowerChartData.year[i] === year) {
          HydropowerChartData.value[i] = IndicatorsData.hydroelectricTurbineData[
                                                        GameSpecifications.currentDecisionsPeriod.id
                                                      ].years[
                                                        year
                                                      ].year_value;
        }
      }
    }
    // calculateConservationAreaScore(periodArea, GameSpecifications.currentDecisionsPeriod.id);
  }

}

// export function calculateConservationAreaScore(_periodArea: number, _periodId: string) {
//   indicatorsScores.conservationArea = 0;
//   const initialArea = -200; //x0
//   const finalArea = 1140; //x1
//   const initialSore = 0; //y0
//   const finalScore = 10; //y1

//  const conservationAreaScore = +(initialSore + ((_periodArea - initialArea) / (finalArea - initialArea) * (finalScore - initialSore))).toFixed(1);
//   conservationPeriodScore.forEach(
//     (element)  => {
//       if (element.periodId === _periodId) {
//         element.score = conservationAreaScore;
//       }
//       indicatorsScores.conservationArea += element.score;
//     }
//   );


 // console.log("indicador valor",indicatorsScores.conservationArea)
  // playerData.score += indicatorsScores.conservationArea;
  // conservationPeriodScore

// }
