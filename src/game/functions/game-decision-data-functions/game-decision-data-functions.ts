import { GameSpecifications, IndicatorsData } from '../../settings/game-system-specifications';
import { GameDecisionsData } from '../../settings/game-decisions-data'
import {conservationAreasData, _conservationAreasDataDefault} from "../../settings/conservation_areas_data";
import { _hydropowerTurbineData } from '../../settings/hydropower_turbine_data';
// /setting/game-decisions';

export function getGameData() {

    if (!GameSpecifications.continueGame) {
      GameSpecifications.gameDecisionsData = JSON.parse(JSON.stringify(GameDecisionsData));
      conservationAreasData.area = _conservationAreasDataDefault.area;
      conservationAreasData.year = _conservationAreasDataDefault.year;

    }

    for(let periodId in GameSpecifications.gameDecisionsData) {
        GameSpecifications.decisionPeriodIds.push(periodId);
        IndicatorsData.periodDataIds.push(periodId);
    }
    GameSpecifications.decisionPeriodIds.reverse();
    IndicatorsData.hydroelectricTurbineData = JSON.parse(JSON.stringify(_hydropowerTurbineData));

    // GameSpecifications.currentPeriodId = GameSpecifications.decisionPeriodIds[GameSpecifications.currentPeriodIndex];

    // GameSpecifications.currentDecisionsPeriod = JSON.parse(JSON.stringify(GameSpecifications.gameDecisionsData[GameSpecifications.currentPeriodId]));
    // for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
    //     GameSpecifications.decisionIds.push(decisionId);
    // }
    // GameSpecifications.currentDecisionId = GameSpecifications.decisionIds[GameSpecifications.currentDecisionIndex];
    // GameSpecifications.currentDecision = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]));
}
