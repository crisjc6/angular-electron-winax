import { DataChartInterface } from '../../interfaces/game-data-chart-interface';
import { DecisionOptionInterface } from '../../interfaces/game-decision-interface';
import { gameData } from '../../settings/game-data/game-data';
import { GameSpecifications } from '../../settings/game-system-specifications';

export function getDemandSiteChartData() {
    if (GameSpecifications.currentDecisionsPeriod != null) {
        for (let i = 0; i < gameData.indicatorsDataChart.demandSiteDataChart.plantaProcesadoraLeche.years.length; i++ ) {
            for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
                if (gameData.indicatorsDataChart.demandSiteDataChart.plantaProcesadoraLeche.years[i] === year) {
                  addYearValue(year, i);
                }
            }
        }
      calculateDemandSiteScore(GameSpecifications.currentDecisionsPeriod.id);
    }
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

export function scorePeriod(_periodId: string, _optionId: string): number {
  let score = 0;
    
  switch (_optionId) {
    case 'P_30_40_1_3': // Planta procesadora de leche
      score = gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[_periodId].period_percent;
      break;
  
    case 'P_40_50_1_1': // Planta procesadora de papa
      score = gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[_periodId].period_percent;
      break;

    case 'P_40_50_1_3': // Plantación de Uvilla C4
      score = gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[_periodId].period_percent;
      break;
        
    default:
      score = 0;
      break;
  }

  return score;
}

export function calculateDemandSiteScore(_periodId: string) {
    let demandSitePeriodScore = 0;

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
          demandSitePeriodScore += scorePeriod(GameSpecifications.currentDecisionsPeriod.id, optionId);
        }
      }
    }
    
    const numberIndicators = demandSitePeriodScore > 0 ? 9 : 8;
    let demandSiteTotalScore = 0;

    gameData.gameScores.demandSiteScores.periodScores.forEach(
      (peridoSore) => {
        // peridoSore.score = 0;
        if (peridoSore.periodId === _periodId) {
          // /**************AÑADIR LOGICA PARA CALCULAR SCORE****************/
            // console.log(
            //   'c1: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[_periodId].period_percent + 
            //   '\nc2: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[_periodId].period_percent + 
            //   '\nc3: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[_periodId].period_percent + 
            //   '\nc4: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[_periodId].period_percent + 
            //   '\nc5: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[_periodId].period_percent + 
            //   '\nc6: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[_periodId].period_percent + 
            //   '\nc7: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[_periodId].period_percent + 
            //   '\nc8: ' + gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[_periodId].period_percent +
            //   '\nnumberIndicators: ' + numberIndicators
            // );

            demandSitePeriodScore += gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[_periodId].period_percent + 
                                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[_periodId].period_percent;
            
          // console.log('\n demandSiteTotalScore: ' + demandSitePeriodScore); 
            peridoSore.score = (demandSitePeriodScore / numberIndicators) / 10;
        }
        demandSiteTotalScore += peridoSore.score;
      }
    );
  
    gameData.gameScores.demandSiteScores.indicatorTotalScore = +(demandSiteTotalScore).toFixed(2);
    gameData.gameScores.totalScore = +(
        gameData.gameScores.conservationAreaScores.indicatorTotalScore +
        gameData.gameScores.hydroelectricTurbineScores.indicatorTotalScore +
        gameData.gameScores.demandSiteScores.indicatorTotalScore +
        gameData.gameScores.helpcareRiverScores.indicatorTotalScore
      ).toFixed(2);
      
    gameData.playerData.score = gameData.gameScores.totalScore;
  }
  
