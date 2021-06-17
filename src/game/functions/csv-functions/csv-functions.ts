import { gameData } from '../../settings/game-data/game-data';

// import { IndicatorsData } from "../../settings/game-system-specifications";

// export function readCSV (req, res) 
export function readHydropowerCSV () {

    const fs = (window as any).fs;
    fs.readFile(
        'C:/CSV/Hydropower Turbine Flow.csv',
        (err,data) => {
  
            if (err) {
                return console.log(err);
            }
            
            const csvData = data.toString().split('\n');
            const _data = csvData[5].split(',');

            let index = 1;
            
            for(let periodId in gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData) {
                let todalPriodPercent = 0;
                let months = 0;
                for (let year = gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].year_start; year <= gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].year_end; year++) {
                    let yearValueAux = 0;
                    for (let month = 1; month <= 12; month++) {
                        gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].value_month = +(_data[index]);
                        gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].percent_month = +(_data[index]) * 100 / 4.5;
                        
                        yearValueAux += +(_data[index]);
                        index++;
                        months++;
                        todalPriodPercent += (+(_data[index]) * 100 / 4.5);
                    }
                    gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].year_value = yearValueAux / 12;
                }
                gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].period_percent = todalPriodPercent / months;
            }
        }
    );
}

export function readDemandSiteCoverageCSV () {

    const fs = (window as any).fs;
    fs.readFile(
        'C:/CSV/Demand Site Coverage.csv',
        (err,data) => {
  
            if (err) {
                return console.log(err);
            }
            
            const csvData = data.toString().split('\n');
            const _plantaProcesadoraLecheData = csvData[5].split(',');
            const _plantaProcesadoraPapaData = csvData[6].split(',');
            const _plantacionUvillaData = csvData[7].split(',');
            const _riegoC1Data = csvData[8].split(',');
            const _riegoC2Data = csvData[9].split(',');
            const _riegoC3Data = csvData[10].split(',');
            const _riegoC4Data = csvData[11].split(',');
            const _riegoC5Data = csvData[12].split(',');
            const _riegoC6Data = csvData[13].split(',');
            const _riegoC7Data = csvData[14].split(',');
            const _riegoC8Data = csvData[15].split(',');

            let index = 1;

            for(let periodId in gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche) {
                for (let year = gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].year_start; year <= gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].year_end; year++) {
                    let yearValuePlantaProcesadoraLeche = 0;
                    let yearValuePlantaProcesadoraPapa = 0;
                    let yearValuePlantacionUvilla = 0;
                    let yearValueRiegoC1 = 0;
                    let yearValueRiegoC2 = 0;
                    let yearValueRiegoC3 = 0;
                    let yearValueRiegoC4 = 0;
                    let yearValueRiegoC5 = 0;
                    let yearValueRiegoC6 = 0;
                    let yearValueRiegoC7 = 0;
                    let yearValueRiegoC8 = 0;
                    
                    for (let month = 1; month <= 12; month++) {
                        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].months[month].id_month = month;
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].months[month].id_month = month;

                        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].months[month].value_month = +(_plantaProcesadoraLecheData[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].months[month].value_month = +(_plantaProcesadoraPapaData[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].months[month].value_month = +(_plantacionUvillaData[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].months[month].value_month = +(_riegoC1Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].months[month].value_month = +(_riegoC2Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].months[month].value_month = +(_riegoC3Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].months[month].value_month = +(_riegoC4Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].months[month].value_month = +(_riegoC5Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].months[month].value_month = +(_riegoC6Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].months[month].value_month = +(_riegoC7Data[index]);
                        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].months[month].value_month = +(_riegoC8Data[index]);
                        
                        yearValuePlantaProcesadoraLeche += +(_plantaProcesadoraLecheData[index]);
                        yearValuePlantaProcesadoraPapa += +(_plantaProcesadoraPapaData[index]);
                        yearValuePlantacionUvilla += +(_plantacionUvillaData[index]);
                        yearValueRiegoC1 += +(_riegoC1Data[index]);
                        yearValueRiegoC2 += +(_riegoC2Data[index]);
                        yearValueRiegoC3 += +(_riegoC3Data[index]);
                        yearValueRiegoC4 += +(_riegoC4Data[index]);
                        yearValueRiegoC5 += +(_riegoC5Data[index]);
                        yearValueRiegoC6 += +(_riegoC6Data[index]);
                        yearValueRiegoC7 += +(_riegoC7Data[index]);
                        yearValueRiegoC8 += +(_riegoC8Data[index]);

                        index++;
                    }
                    
                    gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].year_value = yearValuePlantaProcesadoraLeche / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].year_value = yearValuePlantaProcesadoraPapa / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].year_value = yearValuePlantacionUvilla / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].year_value = yearValueRiegoC1 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].year_value = yearValueRiegoC2 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].year_value = yearValueRiegoC3 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].year_value = yearValueRiegoC4 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].year_value = yearValueRiegoC5 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].year_value = yearValueRiegoC6 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].year_value = yearValueRiegoC7 / 12;
                    gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].year_value = yearValueRiegoC8 / 12;
                    
                    // IndicatorsData.hydroelectricTurbineData[periodId].years[year].year_value = yearValueAux / 12;
                }
            }
        }
    );

}
