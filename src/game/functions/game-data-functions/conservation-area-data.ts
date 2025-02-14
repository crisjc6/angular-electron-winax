import { gameData } from '../../settings/game-data/game-data';
import { DecisionStatus } from '../../settings/game-decisions-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getConservationAreData() {
    let periodArea = 0.00;
    DecisionStatus.conservatio_areas = 10809;

    if(GameSpecifications.currentDecisionsPeriod != null) {
        for (let decisionId in GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions) {
            for (let decisionOptionId in GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions[decisionId].decision_options) {
                const decisionOptionWasSelected = GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions[decisionId].decision_options[decisionOptionId].decision_option_was_selected;
                const decisionOptionAreaValue = GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions[decisionId].decision_options[decisionOptionId].decision_option_area_value;
                if (decisionOptionWasSelected) {
                    periodArea += decisionOptionAreaValue;
                }
            }
        }
        gameData.indicatorsPeriodData.conservationAreaPeriodData[GameSpecifications.currentDecisionsPeriod.id].period_percent = periodArea;


        for (const periodId in gameData.indicatorsPeriodData.conservationAreaPeriodData) {
            DecisionStatus.conservatio_areas += gameData.indicatorsPeriodData.conservationAreaPeriodData[periodId].period_percent;
        }

        gameData.indicatorsDataChart.conservationAreaDataChart.values[0] = 10809;
        for (let i = 1; i < gameData.indicatorsDataChart.conservationAreaDataChart.years.length; i++ ) {
            for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
                if (gameData.indicatorsDataChart.conservationAreaDataChart.years[i] === year) {
                    gameData.indicatorsDataChart.conservationAreaDataChart.values[i] = DecisionStatus.conservatio_areas;
                }
            }
        }
        calculateConservationAreaScore(periodArea, GameSpecifications.currentDecisionsPeriod.id);
    }
}

export function calculateConservationAreaScore(_periodArea: number, _periodId: string) {
  let conservationAreaTotalScore = 0;
  
  let initialArea = -200; //x0
  let finalArea = 100 // 1140; //x1
  let initialSore = 0; //y0
  let finalScore = 10; //y1

  if (_periodId === 'Periodo30_40' ) {
    initialArea = 0; //x0
    finalArea = 800 // 1140; //x1
    initialSore = 0; //y0
    finalScore = 10; //y1
  } else if (_periodId === 'Periodo40_50') {
    initialArea = 0; //x0
    finalArea = 200 // 1140; //x1
    initialSore = 0; //y0
    finalScore = 10; //y1
  }

  // Interpolacion
  const conservationAreaScore = +(initialSore + (((_periodArea - initialArea) / (finalArea - initialArea)) * (finalScore - initialSore))).toFixed(1);
  gameData.gameScores.conservationAreaScores.periodScores.forEach(
    (periodScore)  => {
      if (periodScore.periodId === _periodId) {
        periodScore.score = +(conservationAreaScore.toFixed(2));
      }
      conservationAreaTotalScore += +((periodScore.score).toFixed(2));
    }
  );
  
  gameData.gameScores.conservationAreaScores.indicatorTotalScore = +(conservationAreaTotalScore).toFixed(2);
  gameData.gameScores.totalScore = +(
    gameData.gameScores.conservationAreaScores.indicatorTotalScore +
    gameData.gameScores.hydroelectricTurbineScores.indicatorTotalScore +
    gameData.gameScores.demandSiteScores.indicatorTotalScore +
    gameData.gameScores.helpcareRiverScores.indicatorTotalScore
  ).toFixed(2);
  
  gameData.playerData.score = gameData.gameScores.totalScore;
}
