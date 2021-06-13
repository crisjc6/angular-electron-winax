import { GameSpecifications } from '../../settings/game-system-specifications';
import { GameDecisionsData } from '../../settings/game-decisions-data'
// /setting/game-decisions';

export function getGameData() {
    if (!GameSpecifications.continueGame) {
        GameSpecifications.gameDecisionsData = JSON.parse(JSON.stringify(GameDecisionsData));
    }
    
    for(let periodId in GameSpecifications.gameDecisionsData) {
        GameSpecifications.decisionPeriodIds.push(periodId);
    }
    GameSpecifications.decisionPeriodIds.reverse();
    // GameSpecifications.currentPeriodId = GameSpecifications.decisionPeriodIds[GameSpecifications.currentPeriodIndex];

    // GameSpecifications.currentDecisionsPeriod = JSON.parse(JSON.stringify(GameSpecifications.gameDecisionsData[GameSpecifications.currentPeriodId]));
    // for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
    //     GameSpecifications.decisionIds.push(decisionId);
    // }
    // GameSpecifications.currentDecisionId = GameSpecifications.decisionIds[GameSpecifications.currentDecisionIndex];
    // GameSpecifications.currentDecision = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]));
}