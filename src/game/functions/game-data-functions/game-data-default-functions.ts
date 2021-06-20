import { GameSpecifications } from '../../settings/game-system-specifications';
import { GameDecisionsData } from '../../settings/game-decisions-data'
import { gameData } from '../../settings/game-data/game-data';
import { _gameScoresDefault, _indicatorsDataChartDefault, _indicatorsPeriodDataDefault, _playerDataDefault } from '../../settings/game-data/game-data-default';

export function getGameDataDefault() {

    if (!GameSpecifications.continueGame) {
      GameSpecifications.gameDecisionsData = JSON.parse(JSON.stringify(GameDecisionsData));
      GameSpecifications.currentPeriodIndex = 0;
      GameSpecifications.decisionPeriodIds = [];
      GameSpecifications.currentPeriodId = '';
      GameSpecifications.currentDecisionsPeriod = null;
      GameSpecifications.currentDecisionIndex = 0;
      GameSpecifications.decisionIds = [];
      GameSpecifications.currentDecisionId = '';

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
}
