import { gameData } from '../../settings/game-data/game-data';
import { DecisionStatus } from '../../settings/game-decisions-data';
import { GameSpecifications } from '../../settings/game-system-specifications';
import { DecisionOptionInterface } from '../../interfaces/game-decision-interface';

export function getConservationAreData() {
  // let periodArea = 10809;
  let periodArea = 0;

  if(GameSpecifications.currentDecisionsPeriod != null){
    for (let index = 0; index < GameSpecifications.decisionIds.length; index++) {
      const decisionID = GameSpecifications.decisionIds[index];
      const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[decisionID].decision_options));

      for(let optionId in decisionOptions) {
        if (
          GameSpecifications.currentDecisionsPeriod
            .decisions[
            decisionID
            ].decision_options[
            optionId
            ].decision_option_was_selected
        ) {
          const decisionOptionSelected = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod
            .decisions[
            decisionID
            ].decision_options[
            optionId
            ]));
          DecisionStatus.conservatio_areas += decisionOptionSelected.decision_option_area_value;
          periodArea += decisionOptionSelected.decision_option_area_value;
        }
      }
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
  
  const initialArea = -200; //x0
  const finalArea = 100 // 1140; //x1
  const initialSore = 0; //y0
  const finalScore = 10; //y1

  const conservationAreaScore = +(initialSore + (((_periodArea - initialArea) / (finalArea - initialArea)) * (finalScore - initialSore))).toFixed(1);

  gameData.gameScores.conservationAreaScores.periodScores.forEach(
    (periodScore)  => {
      if (periodScore.periodId === _periodId) {
        periodScore.score = conservationAreaScore;
      }
      conservationAreaTotalScore += periodScore.score;
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
