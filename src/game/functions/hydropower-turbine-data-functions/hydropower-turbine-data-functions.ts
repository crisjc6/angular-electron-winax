import {
  GameSpecifications,
  IndicatorsData,
  indicatorsScores,
  playerData
} from '../../settings/game-system-specifications';
import {HydropowerChartData, hydropowerPeriodScore} from '../../settings/hydropower_turbine_data';

export function getHydropowerChartData() {
  if (GameSpecifications.currentDecisionsPeriod != null) {
    for (let i = 0; i < HydropowerChartData.year.length; i++ ) {
      for (let year = GameSpecifications.currentDecisionsPeriod.year_start; year <= GameSpecifications.currentDecisionsPeriod.year_end; year++) {
        if (HydropowerChartData.year[i] === year) {
          HydropowerChartData.value[i] = (IndicatorsData.hydroelectricTurbineData[
                                                        GameSpecifications.currentDecisionsPeriod.id
                                                      ].years[
                                                        year
                                                      ].year_value).toFixed(2);

        }
      }
    }
    calculateHydropowerScore(GameSpecifications.currentDecisionsPeriod.id);
  }
  // console.log("data grafiar",HydropowerChartData);
}

export function calculateHydropowerScore(_periodId: string) {
  indicatorsScores.hydroelectricTurbine = 0;

  hydropowerPeriodScore.forEach(
    (element) => {
      if (element.periodId === _periodId) {
          element.score = +( (IndicatorsData.hydroelectricTurbineData[
            _periodId
            ].period_percent / 10).toFixed(2));
      }
      indicatorsScores.hydroelectricTurbine += element.score;
    }
  );

  playerData.score = +(indicatorsScores.conservationArea + indicatorsScores.coverageDeficit + indicatorsScores.helpcareRiver + indicatorsScores.hydroelectricTurbine).toFixed(2);

  // conservationPeriodScore

}

