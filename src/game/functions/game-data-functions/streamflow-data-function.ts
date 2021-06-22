import { gameData } from '../../settings/game-data/game-data';
import { _idealFlowPeriodData } from '../../settings/game-data/game-data-default';
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
        calculateStreamflowScore(GameSpecifications.currentDecisionsPeriod.id);
    }
}

export function calculateStreamflowScore(_periodId: string) {
    let streamflowTotalScore = 0;
  
    gameData.gameScores.helpcareRiverScores.periodScores.forEach(
        (peridoSore) => {
            // peridoSore.score = 0;
            if (peridoSore.periodId === _periodId) {
                
                const idealFlowPeriodData = JSON.parse(JSON.stringify(_idealFlowPeriodData));
                let peridoScore = 0;
                for (let year = idealFlowPeriodData[_periodId].year_start; year <= idealFlowPeriodData[_periodId].year_end; year++) {
                    let yearScore = 0;
                    
                    for (let month = 1; month <= 12; month++) {
                        let score = 0;
                        if (
                            gameData.indicatorsPeriodData
                                    .helpcareRiverPeriodData[_periodId]
                                    .years[year].months[month].value_month
                              >=
                            idealFlowPeriodData[_periodId].years[year].months[month].value_month
                        ) {
                          score = 10;
                        } else {

                            score = (gameData.indicatorsPeriodData
                                            .helpcareRiverPeriodData[_periodId]
                                            .years[year].months[month].value_month *
                                            10) / idealFlowPeriodData[_periodId].years[year].months[month].value_month; 
                        }
                        yearScore += score;
                    }
                    peridoScore += yearScore / 12;
                }
                
                peridoSore.score = +((peridoScore / ( (idealFlowPeriodData[_periodId].year_end - idealFlowPeriodData[_periodId].year_start) + 1)).toFixed(2));
            }
            streamflowTotalScore += peridoSore.score;
        }
    );
  
    gameData.gameScores.helpcareRiverScores.indicatorTotalScore = +(streamflowTotalScore).toFixed(2);
    gameData.gameScores.totalScore = +(
        gameData.gameScores.conservationAreaScores.indicatorTotalScore +
        gameData.gameScores.hydroelectricTurbineScores.indicatorTotalScore +
        gameData.gameScores.demandSiteScores.indicatorTotalScore +
        gameData.gameScores.helpcareRiverScores.indicatorTotalScore
      ).toFixed(2);
      
    gameData.playerData.score = gameData.gameScores.totalScore;
}
  
  
