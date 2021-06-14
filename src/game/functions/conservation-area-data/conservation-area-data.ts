import { DecisionOptionInterface } from '../../interfaces/game-decision-interface';
import { DecisionStatus } from '../../settings/game-decisions-data';
import { GameSpecifications } from '../../settings/game-system-specifications';
import { conservationAreasData } from '../../settings/conservation_areas_data';

export function getConservationAreData() {
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
          DecisionStatus.conservatio_areas += GameSpecifications.currentDecisionsPeriod
            .decisions[
            decisionID
            ].decision_options[
            optionId
            ].decision_option_area_value;
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
  }


}
