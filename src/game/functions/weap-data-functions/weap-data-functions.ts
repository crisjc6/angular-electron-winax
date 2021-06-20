import { gameData } from '../../settings/game-data/game-data';


import winax from "winax";

export function runWEAP(): any {
    const WEAP = new winax.Object("WEAP.WEAPApplication");
    WEAP.ActiveArea = "Tesis_IR_6";
    return WEAP;
}

export function getDataWeap(_weapApi: any) {
    _weapApi.View = "Results";
    saveHydropowerWeapData(_weapApi);
    saveDemandSiteCoverageWeapData(_weapApi);
    saveStreamflowWeapData(_weapApi);
}


// import { IndicatorsData } from "../../settings/game-system-specifications";

// export function readCSV (req, res)

export function saveHydropowerWeapData (_weapApi: any) {
    let index = 1;

    for (let periodId in gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData) {
        let todalPriodPercent = 0;
        let months = 0;
        for (let year = gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].year_start; year <= gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].year_end; year++) {
            let yearValueAux = 0;
            for (let month = 1; month <= 12; month++) {
                const value = _weapApi.ResultValue("\\Supply and Resources\\River\\C3 River\\Run of River Hydro\\La_Calera:Hydropower Turbine Flow[CMS]", year, month, "Escenarios_juego");
                gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].id_month = month;
                gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].value_month = value;
                gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].percent_month = value * 100 / 4.5;
                
                yearValueAux += value;
                todalPriodPercent += (value * 100) / 4.5;
                index++;
                months++;                        
            }
            gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].year_value = yearValueAux / 12;
        }
        gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].period_percent = todalPriodPercent / months;
    }
}

export function saveDemandSiteCoverageWeapData (_weapApi: any) {

    let index = 1;

    for(let periodId in gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche) {
        let yearAveragePlantaProcesadoraLeche = 0;
        let yearAveragePlantaProcesadoraPapa = 0;
        let yearAveragePlantacionUvilla = 0;
        let yearAverageRiegoC1 = 0;
        let yearAverageRiegoC2 = 0;
        let yearAverageRiegoC3 = 0;
        let yearAverageRiegoC4 = 0;
        let yearAverageRiegoC5 = 0;
        let yearAverageRiegoC6 = 0;
        let yearAverageRiegoC7 = 0;
        let yearAverageRiegoC8 = 0;

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
                const valuePlantaProcesadoraLeche = _weapApi.ResultValue("\\Demand Sites and Catchments\\Planta procesadora de leche:Coverage[%]", year, month, "Escenarios_juego");
                const valuePlantaProcesadoraPapa = _weapApi.ResultValue("\\Demand Sites and Catchments\\Planta procesadora de papa:Coverage[%]", year, month, "Escenarios_juego");
                const valuePlantacionUvilla = _weapApi.ResultValue("\\Demand Sites and Catchments\\Plantacion de Uvilla:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC1 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C1:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC2 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C2:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC3 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C3:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC4 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C4:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC5 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C5:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC6 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C6:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC7 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C7:Coverage[%]", year, month, "Escenarios_juego");
                const valueRiegoC8 = _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C8:Coverage[%]", year, month, "Escenarios_juego");
                
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

                gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].months[month].value_month = valuePlantaProcesadoraLeche;
                gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].months[month].value_month = valuePlantaProcesadoraPapa;
                gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].months[month].value_month = valuePlantacionUvilla;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].months[month].value_month = valueRiegoC1;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].months[month].value_month = valueRiegoC2;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].months[month].value_month = valueRiegoC3;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].months[month].value_month = valueRiegoC4;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].months[month].value_month = valueRiegoC5;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].months[month].value_month = valueRiegoC6;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].months[month].value_month = valueRiegoC7;
                gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].months[month].value_month = valueRiegoC8;
                
                yearValuePlantaProcesadoraLeche += valuePlantaProcesadoraLeche;
                yearValuePlantaProcesadoraPapa += valuePlantaProcesadoraPapa;
                yearValuePlantacionUvilla += valuePlantacionUvilla;
                yearValueRiegoC1 += valueRiegoC1;
                yearValueRiegoC2 += valueRiegoC2;
                yearValueRiegoC3 += valueRiegoC3;
                yearValueRiegoC4 += valueRiegoC4;
                yearValueRiegoC5 += valueRiegoC5;
                yearValueRiegoC6 += valueRiegoC6;
                yearValueRiegoC7 += valueRiegoC7;
                yearValueRiegoC8 += valueRiegoC8;

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

            yearAveragePlantaProcesadoraLeche += yearValuePlantaProcesadoraLeche / 12;
            yearAveragePlantaProcesadoraPapa += yearValuePlantaProcesadoraPapa / 12;
            yearAveragePlantacionUvilla += yearValuePlantacionUvilla / 12;
            yearAverageRiegoC1 += yearValueRiegoC1 / 12;
            yearAverageRiegoC2 += yearValueRiegoC2 / 12;
            yearAverageRiegoC3 += yearValueRiegoC3 / 12;
            yearAverageRiegoC4 += yearValueRiegoC4 / 12;
            yearAverageRiegoC5 += yearValueRiegoC5 / 12;
            yearAverageRiegoC6 += yearValueRiegoC6 / 12;
            yearAverageRiegoC7 += yearValueRiegoC7 / 12;
            yearAverageRiegoC8 += yearValueRiegoC8 / 12;
        }
        
        const numberYears = gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].year_end - gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].year_start + 1;

        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].period_percent = yearAveragePlantaProcesadoraLeche / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].period_percent = yearAveragePlantaProcesadoraPapa / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].period_percent = yearAveragePlantacionUvilla / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].period_percent = yearAverageRiegoC1 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].period_percent = yearAverageRiegoC2 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].period_percent = yearAverageRiegoC3 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].period_percent = yearAverageRiegoC4 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].period_percent = yearAverageRiegoC5 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].period_percent = yearAverageRiegoC6 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].period_percent = yearAverageRiegoC7 / numberYears;
        gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].period_percent = yearAverageRiegoC8 / numberYears;
    }
}

export function saveStreamflowWeapData (_weapApi: any) {

    let index = 1;

    for(let periodId in gameData.indicatorsPeriodData.helpcareRiverPeriodData) {
        for (let year = gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].year_start; year <= gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].year_end; year++) {
            let yearValueStreamflow = 0;
            for (let month = 1; month <= 12; month++) {
                const value = _weapApi.ResultValue("\\Supply and Resources\\River\\C3 River\\Reaches\\Below Aguas_ab_Jambeli:Streamflow[CMS]", year, month, "Escenarios_juego");
                gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].years[year].months[month].id_month = month;
                gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].years[year].months[month].value_month = value;
                yearValueStreamflow += value;

                index++;
            }
            
            gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].years[year].year_value = yearValueStreamflow / 12;
            
        }
    }
}























// export function readHydropowerCSV () {

//     const fs = (window as any).fs;
//     fs.readFile(
//         'C:/CSV/HydropowerTurbineFlow.csv',
//         (err,data) => {
  
//             if (err) {
//                 return console.log(err);
//             }
            
//             const csvData = data.toString().split('\n');
//             const _data = csvData[4].split(',');

//             let index = 1;
        
//             for(let periodId in gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData) {
//                 let todalPriodPercent = 0;
//                 let months = 0;
//                 for (let year = gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].year_start; year <= gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].year_end; year++) {
//                     let yearValueAux = 0;
//                     for (let month = 1; month <= 12; month++) {
//                         gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].value_month = +_data[index];
//                         gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].months[month].percent_month = +_data[index] * 100 / 4.5;
                        
//                         yearValueAux += +(_data[index]);
//                         todalPriodPercent += (+(_data[index]) * 100 / 4.5);
//                         index++;
//                         months++;                        
//                     }
//                     gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].years[year].year_value = yearValueAux / 12;
//                 }
//                 gameData.indicatorsPeriodData.hydroelectricTurbinePeriodData[periodId].period_percent = todalPriodPercent / months;
//             }
//         }
//     );
// }

// export function readDemandSiteCoverageCSV () {

//     const fs = (window as any).fs;
//     fs.readFile(
//         'C:/CSV/DemandSiteCoverage.csv',
//         (err,data) => {
  
//             if (err) {
//                 return console.log(err);
//             }
            
//             const csvData = data.toString().split('\n');
//             const _plantaProcesadoraLecheData = csvData[4].split(',');
//             const _plantaProcesadoraPapaData = csvData[5].split(',');
//             const _plantacionUvillaData = csvData[6].split(',');
//             const _riegoC1Data = csvData[7].split(',');
//             const _riegoC2Data = csvData[8].split(',');
//             const _riegoC3Data = csvData[9].split(',');
//             const _riegoC4Data = csvData[10].split(',');
//             const _riegoC5Data = csvData[11].split(',');
//             const _riegoC6Data = csvData[12].split(',');
//             const _riegoC7Data = csvData[13].split(',');
//             const _riegoC8Data = csvData[14].split(',');

//             let index = 1;

//             for(let periodId in gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche) {
//                 for (let year = gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].year_start; year <= gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].year_end; year++) {
//                     let yearValuePlantaProcesadoraLeche = 0;
//                     let yearValuePlantaProcesadoraPapa = 0;
//                     let yearValuePlantacionUvilla = 0;
//                     let yearValueRiegoC1 = 0;
//                     let yearValueRiegoC2 = 0;
//                     let yearValueRiegoC3 = 0;
//                     let yearValueRiegoC4 = 0;
//                     let yearValueRiegoC5 = 0;
//                     let yearValueRiegoC6 = 0;
//                     let yearValueRiegoC7 = 0;
//                     let yearValueRiegoC8 = 0;
                    
//                     for (let month = 1; month <= 12; month++) {
//                         gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].months[month].id_month = month;

//                         gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].months[month].value_month = +(_plantaProcesadoraLecheData[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].months[month].value_month = +(_plantaProcesadoraPapaData[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].months[month].value_month = +(_plantacionUvillaData[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].months[month].value_month = +(_riegoC1Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].months[month].value_month = +(_riegoC2Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].months[month].value_month = +(_riegoC3Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].months[month].value_month = +(_riegoC4Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].months[month].value_month = +(_riegoC5Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].months[month].value_month = +(_riegoC6Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].months[month].value_month = +(_riegoC7Data[index]);
//                         gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].months[month].value_month = +(_riegoC8Data[index]);
                        
//                         yearValuePlantaProcesadoraLeche += +(_plantaProcesadoraLecheData[index]);
//                         yearValuePlantaProcesadoraPapa += +(_plantaProcesadoraPapaData[index]);
//                         yearValuePlantacionUvilla += +(_plantacionUvillaData[index]);
//                         yearValueRiegoC1 += +(_riegoC1Data[index]);
//                         yearValueRiegoC2 += +(_riegoC2Data[index]);
//                         yearValueRiegoC3 += +(_riegoC3Data[index]);
//                         yearValueRiegoC4 += +(_riegoC4Data[index]);
//                         yearValueRiegoC5 += +(_riegoC5Data[index]);
//                         yearValueRiegoC6 += +(_riegoC6Data[index]);
//                         yearValueRiegoC7 += +(_riegoC7Data[index]);
//                         yearValueRiegoC8 += +(_riegoC8Data[index]);

//                         index++;
//                     }
                    
//                     gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraLeche[periodId].years[year].year_value = yearValuePlantaProcesadoraLeche / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.plantaProcesadoraPapa[periodId].years[year].year_value = yearValuePlantaProcesadoraPapa / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.plantacionUvilla[periodId].years[year].year_value = yearValuePlantacionUvilla / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC1[periodId].years[year].year_value = yearValueRiegoC1 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC2[periodId].years[year].year_value = yearValueRiegoC2 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC3[periodId].years[year].year_value = yearValueRiegoC3 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC4[periodId].years[year].year_value = yearValueRiegoC4 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC5[periodId].years[year].year_value = yearValueRiegoC5 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC6[periodId].years[year].year_value = yearValueRiegoC6 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC7[periodId].years[year].year_value = yearValueRiegoC7 / 12;
//                     gameData.indicatorsPeriodData.demandSitePeriodData.riegoC8[periodId].years[year].year_value = yearValueRiegoC8 / 12;
//                 }
//             }
//         }
//     );

// }

// export function readStreamflowCSV () {
//     const _weapApi = runWEAP();
//     const fs = (window as any).fs;
//     fs.readFile(
//         'C:/CSV/Streamflow.csv',
//         (err,data) => {
  
//             if (err) {
//                 return console.log(err);
//             }
            
//             const csvData = data.toString().split('\n');
//             const _aguasAbJambeliData = csvData[4].split(',');

//             let index = 1;

//             for(let periodId in gameData.indicatorsPeriodData.helpcareRiverPeriodData) {
//                 for (let year = gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].year_start; year <= gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].year_end; year++) {
//                     let yearValueStreamflow = 0;
                    
//                     for (let month = 1; month <= 12; month++) {
//                         // console.log("Año: " + year +', mes: ' + month);
//                         // console.log( _weapApi.ResultValue("\\Supply and Resources\\River\\C3 River\\Reaches\\Below Aguas_ab_Jambeli:Streamflow[CMS]", year, month, "Escenarios_juego"));
//                         // console.log( _weapApi.ResultValue("\\Supply and Resources\\River\\C3 River\\Run of River Hydro\\La_Calera:Hydropower Turbine Flow[CMS]", year, month, "Escenarios_juego"));
//                         // console.log( _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C1:Coverage[%]", year, month, "Escenarios_juego"));
//                         // console.log( _weapApi.ResultValue("\\Demand Sites and Catchments\\Riego_C1:Coverage[%]", year, month, "Escenarios_juego"));
    
//                         gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].years[year].months[month].id_month = month;
//                         gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].years[year].months[month].value_month = +(_aguasAbJambeliData[index]);
//                         yearValueStreamflow += +(_aguasAbJambeliData[index]);

//                         index++;
//                     }
                    
//                     gameData.indicatorsPeriodData.helpcareRiverPeriodData[periodId].years[year].year_value = yearValueStreamflow / 12;
                    
//                 }
//             }
//         }
//     );
// }

// export function readCvsGame() {
//     readHydropowerCSV();
//     readDemandSiteCoverageCSV();
//     readStreamflowCSV();
// }
