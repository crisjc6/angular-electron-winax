import { GameSpecifications } from '../../settings/game-system-specifications';
import { GameDecisionsData } from '../../settings/game-decisions-data'
import { _conservationAreasDataDefault} from "../../settings/conservation_areas_data";
import { _hydropowerTurbineData } from '../../settings/hydropower_turbine_data';
import { gameData } from '../../settings/game-data/game-data';
import { _gameDataDefault, _gameScoresDefault, _indicatorsDataChartDefault, _indicatorsPeriodDataDefault, _playerDataDefault } from '../../settings/game-data/game-data-default';
// /setting/game-decisions';

export function getGameData() {

    if (!GameSpecifications.continueGame) {
      GameSpecifications.gameDecisionsData = JSON.parse(JSON.stringify(GameDecisionsData));

      gameData.playerData = JSON.parse(JSON.stringify(_playerDataDefault));
      gameData.indicatorsPeriodData = JSON.parse(JSON.stringify(_indicatorsPeriodDataDefault));
      gameData.indicatorsDataChart = JSON.parse(JSON.stringify(_indicatorsDataChartDefault));
      gameData.gameScores = JSON.parse(JSON.stringify(_gameScoresDefault));

      for(let periodId in GameSpecifications.gameDecisionsData) {
        GameSpecifications.decisionPeriodIds.push(periodId);
        gameData.indicatorsPeriodData.periodDataIds.push(periodId);
        gameData.indicatorsDataChart.periodDataIds.push(periodId);
      }

      GameSpecifications.decisionPeriodIds.reverse();
    }

   
    // GameSpecifications.currentPeriodId = GameSpecifications.decisionPeriodIds[GameSpecifications.currentPeriodIndex];

    // GameSpecifications.currentDecisionsPeriod = JSON.parse(JSON.stringify(GameSpecifications.gameDecisionsData[GameSpecifications.currentPeriodId]));
    // for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
    //     GameSpecifications.decisionIds.push(decisionId);
    // }
    // GameSpecifications.currentDecisionId = GameSpecifications.decisionIds[GameSpecifications.currentDecisionIndex];
    // GameSpecifications.currentDecision = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]));
}
