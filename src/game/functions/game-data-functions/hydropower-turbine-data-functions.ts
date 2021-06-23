import { gameData } from '../../settings/game-data/game-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getHydropowerChartData() {
  if (GameSpecifications.currentDecisionsPeriod != null) {
    for (let i = 0; i < gameData.indicatorsDataChart.hydroelectricTurbineDataChart.years.length; i++ ) {
      for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
        if (gameData.indicatorsDataChart.hydroelectricTurbineDataChart.years[i] === year) {
          gameData.indicatorsDataChart.hydroelectricTurbineDataChart.values[i] = +(gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[
                                                        GameSpecifications.currentDecisionsPeriod.id
                                                      ].years[
                                                        year
                                                      ].year_value).toFixed(2);
        }
      }
    }
    calculateHydropowerScore(GameSpecifications.currentDecisionsPeriod.id);
  }
}

export function calculateHydropowerScore(_periodId: string) {
  let hydroelectricTurbineTotalScore = 0;

  gameData.gameScores.hydroelectricTurbineScores.periodScores.forEach(
    (peridoSore) => {
      if (peridoSore.periodId === _periodId) {
          peridoSore.score = +((+(
              gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[
                _periodId
              ].period_percent / 10
            ))).toFixed(2);
      }
      hydroelectricTurbineTotalScore += peridoSore.score;
    }
  );

  gameData.gameScores.hydroelectricTurbineScores.indicatorTotalScore = +(hydroelectricTurbineTotalScore).toFixed(2);
  gameData.gameScores.totalScore = +(
      gameData.gameScores.conservationAreaScores.indicatorTotalScore +
      gameData.gameScores.hydroelectricTurbineScores.indicatorTotalScore +
      gameData.gameScores.demandSiteScores.indicatorTotalScore +
      gameData.gameScores.helpcareRiverScores.indicatorTotalScore
    ).toFixed(2);
    
  gameData.playerData.score = gameData.gameScores.totalScore;
}

