import { DecisionOptionInterface } from '../../interfaces/game-decision-interface';
import { DecisionStatus } from '../../settings/game-decisions-data';
import {GameSpecifications, indicatorsScores, playerData} from '../../settings/game-system-specifications';
import {conservationAreasData, conservationPeriodScore} from '../../settings/conservation_areas_data';

export function getConservationAreData() {
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
    // conservationAreasData
    for (let i = 1; i < conservationAreasData.year.length; i++ ) {
      for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
        if (conservationAreasData.year[i] === year) {
          conservationAreasData.area[i] = DecisionStatus.conservatio_areas;
        }
      }
    }
    calculateConservationAreaScore(periodArea, GameSpecifications.currentDecisionsPeriod.id);

  }
}

export function calculateConservationAreaScore(_periodArea: number, _periodId: string) {
  indicatorsScores.conservationArea = 0;
  const initialArea = -200; //x0
  const finalArea = 1140; //x1
  const initialSore = 0; //y0
  const finalScore = 10; //y1

 const conservationAreaScore = +(initialSore + ((_periodArea - initialArea) / (finalArea - initialArea) * (finalScore - initialSore))).toFixed(1);
  conservationPeriodScore.forEach(
    (element)  => {
      if (element.periodId === _periodId) {
        element.score = conservationAreaScore;
      }
      indicatorsScores.conservationArea += element.score;
    }
  );
  

 // console.log("indicador valor",indicatorsScores.conservationArea)
  // playerData.score += indicatorsScores.conservationArea;
  // conservationPeriodScore

}
