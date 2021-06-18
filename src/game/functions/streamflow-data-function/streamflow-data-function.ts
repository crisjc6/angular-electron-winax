import { gameData } from '../../settings/game-data/game-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getStreamFlowChartData() {
    if (GameSpecifications.currentDecisionsPeriod != null) {
        for (let i = 0; i < gameData.indicatorsDataChart.helpcareRiverDataChart.years.length; i++ ) {
            for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
                if (gameData.indicatorsDataChart.helpcareRiverDataChart.years[i] === year) {
                    gameData.indicatorsDataChart.helpcareRiverDataChart.values[i] = +(gameData.indicatorsPeriodData.helpcareRiverPeriodData[
                                                                GameSpecifications.currentDecisionsPeriod.id
                                                            ].years[
                                                                year
                                                            ].year_value).toFixed(2);
                }
            }
        }
    //   calculateStreamflowScore(GameSpecifications.currentDecisionsPeriod.id);
    }
}


export function calculateStreamflowScore(_periodId: string) {
    let hydroelectricTurbineTotalScore = 0;
  
    gameData.gameScores.hydroelectricTurbineScores.periodScores.forEach(
      (peridoSore) => {
        peridoSore.score = 0;
        if (peridoSore.periodId === _periodId) {
            peridoSore.score = +(
                gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[
                  _periodId
                ].period_percent / 10
              );
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
  
  
