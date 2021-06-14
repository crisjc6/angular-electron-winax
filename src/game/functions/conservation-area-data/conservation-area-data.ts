import { DecisionOptionInterface } from '../../interfaces/game-decision-interface';
import { DecisionStatus } from '../../settings/game-decisions-data';
import { GameSpecifications } from '../../settings/game-system-specifications';
import { conservationAreasData } from '../../settings/conservation_areas_data';

export function getConservationAreData() {
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

    for (let i = 0; i < conservationAreasData.length; i++ ) {
        for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
            if (conservationAreasData[i].year === year) {
               conservationAreasData[i].area = DecisionStatus.conservatio_areas;
            }
        }
    }

}