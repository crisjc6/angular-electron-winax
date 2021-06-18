import { DataChartInterface } from '../../interfaces/game-data-chart-interface';
import { gameData } from '../../settings/game-data/game-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getDemandSiteChartData() {
    if (GameSpecifications.currentDecisionsPeriod != null) {
      for (let i = 0; i < gameData.indicatorsDataChart.demandSiteDataChart.plantaProcesadoraLeche.years.length; i++ ) {
        for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
          if (gameData.indicatorsDataChart.demandSiteDataChart.plantaProcesadoraLeche.years[i] === year) {
            addYearValue(year, i);
            // gameData.indicatorsDataChart.hydroelectricTurbineDataChart.values[i] = +(gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[
            //                                               GameSpecifications.currentDecisionsPeriod.id
            //                                             ].years[
            //                                               year
            //                                             ].year_value).toFixed(2);
          }
        }
      }
    //   calculateDemandSiteScore(GameSpecifications.currentDecisionsPeriod.id);
    }
    // console.log(gameData.indicatorsDataChart);
}

export function addYearValue(year: number, valueIndex: number) {
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.plantaProcesadoraLeche,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.plantaProcesadoraPapa,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.plantacionUvilla,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC1,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC2,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC3,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC4,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC5,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC6,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC7,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
    addIndicatorYearValue(
        gameData.indicatorsDataChart.demandSiteDataChart.riegoC8,
        valueIndex,
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[ GameSpecifications.currentDecisionsPeriod.id ].years[ year ].year_value
    );
    
}

export function addIndicatorYearValue(indicatorValueChart: DataChartInterface, valueIndex: number, valueYearChart: number ) {
    indicatorValueChart.values[valueIndex] = +(valueYearChart).toFixed(2);
}

export function calculateDemandSiteScore(_periodId: string) {
    let hydroelectricTurbineTotalScore = 0;
  
    gameData.gameScores.demandSiteScores.periodScores.forEach(
      (peridoSore) => {
        peridoSore.score = 0;
        if (peridoSore.periodId === _periodId) {
          /**************AÑADIR LOGICA PARA CALCULAR SCORE****************/
            peridoSore.score = +(
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[
                  _periodId
                ].period_percent / 10
              );
              // console.log(gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[
              //   _periodId
              // ]);
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
  
