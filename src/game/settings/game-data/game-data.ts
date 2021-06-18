import { GameScoreDataInterface, GameScoresinterface } from "../../interfaces/game-score-interface";
import { IndicatorsDataChartsInterface, IndicatorsPeriodDataInterface } from "../../interfaces/indicators-data-interface";
import { _gameScoresDefault, _indicatorsDataChartDefault, _indicatorsPeriodDataDefault, _playerDataDefault } from "./game-data-default";

export const gameData: {
    playerData: GameScoreDataInterface,
    indicatorsPeriodData: IndicatorsPeriodDataInterface,
    indicatorsDataChart: IndicatorsDataChartsInterface,
    gameScores: GameScoresinterface
} = {
    playerData: JSON.parse(JSON.stringify(_playerDataDefault)),
    indicatorsPeriodData: JSON.parse(JSON.stringify(_indicatorsPeriodDataDefault)),
    indicatorsDataChart: JSON.parse(JSON.stringify(_indicatorsDataChartDefault)),
    gameScores: JSON.parse(JSON.stringify(_gameScoresDefault))
}

