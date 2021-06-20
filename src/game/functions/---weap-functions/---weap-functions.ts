// import winax from "winax";
// // import { readCvsGame } from "../../functions/csv-functions/csv-functions";

// export function makeDirectory(pathDirectory: string) {
//     const fs = (window as any).fs;

//     if (!fs.existsSync(pathDirectory)){
//         fs.mkdirSync(pathDirectory);
//     }
// }

// // import winax from "winax";

// export function runWEAP(): any {
//     const WEAP = new winax.Object("WEAP.WEAPApplication");
//     WEAP.ActiveArea = "Tesis_IR_6";
//     return WEAP;
// }

// export function getDataWeap() {
//     const weapApi = runWEAP();

// }

// export function generateWeapCsv(
//     _weap: any,
//     _chartName: string,
//     _csvName: string,
//     _directoryPath: string
// ) {
//     _weap.ResultSetting('Variable', _chartName );
//     _weap.ResultSetting('Scenario', 'Escenarios_juego');
//     _weap.ResultSetting('Year', 'All');
//     _weap.ResultSetting('XAxis', 'Year');
//     _weap.ResultSetting("Month", "All");
//     _weap.ExportResults(_directoryPath + _csvName + '.csv');

// }

// export function generateCsv(_weapApi: any) {
//     const directoryPath = 'C:\\CSV\\';
//     makeDirectory(directoryPath);

//     //'PRINT WEAP.ResultValue("Supply and Resources\River\C3 River\Reaches\Below Aguas_ab_Jambeli:Streamflow[CMS]", 2020, 1, "Escenarios_juego")'
//     // console.log( _weapApi.ResultValue("\\Supply and Resources\\River\\C3 River\\Reaches\\Below Aguas_ab_Jambeli:Streamflow[CMS]", 2020, 1, "Escenarios_juego"));
//     // console.log( _weapApi.ResultValue("\\Supply and Resources\\River\\C3 River\\Reaches\\Below Aguas_ab_Jambeli:Streamflow[CMS]", 2020, 1, "Escenarios_juego", 2050, 12));
//     // const weapApi = runWEAP();
//     generateWeapCsv(_weapApi, 'Coverage', 'DemandSiteCoverage', directoryPath);
//     // setTimeout(() => {
//         generateWeapCsv(_weapApi, 'Hydropower Turbine Flow[CMS]', 'HydropowerTurbineFlow', directoryPath);
//         generateWeapCsv(_weapApi, 'Streamflow[CMS]', 'Streamflow', directoryPath);
//         readCvsGame();
//     // }, 250);
// }

/*
' ResultSetting("Variable") = "Hydropower Turbine Flow [CMS]"
 Setting(Key, Section)
*/

/*
export function __runWEAP() {
    const WEAP = new winax.Object("WEAP.WEAPApplication");
    WEAP.Visible = true;
    WEAP.ActiveArea = "Tesis_IR_6";
    // WEAP.ActiveScenario = "Escenarios_juego";

    // WEAP.ResultSetting("Variable", "Coverage");
    // WEAP.ExportResults("C:\\CSV2\\Coverage.csv");

    //PrevTSValue(Aguas_ab_Jambeli:Streamflow[m^3])
    WEAP.ResultSetting("Variable", "Streamflow [Cubic Meters per Second]");
    // WEAP.ResultSetting("Scenario", "All");
    WEAP.ResultSetting("Scenario", "Escenarios_juego");
    // WEAP.ResultSetting("Branch", "River: C3 River");
    // WEAP.ResultSetting("Branch", "Selected C3 River Nodes and Reaches: 15 \\ Aguas_ab_Jambeli");
    WEAP.ResultSetting("Branch", "Supply and Resources\\River\\C3 River\\Reaches\\Below Aguas_ab_Jambeli");
    // WEAP.ResultSetting("Branch", "\\Supply and Resources\\River\\C3 River\\Reaches\\Below Aguas_ab_Jambeli:Streamflow[m^3]");
    // WEAP.ResultSetting("Branch", "\\Demand Sites and Catchments\\Riego_C3\\Aguas_ab_Jambeli");
    // WEAP.ResultSetting("Branch", "\\Demand Sites and Catchments\\Riego_C3\\Aguas_ab_Jambeli");
    // WEAP.ResultSetting("Branch", "Below Aguas_ab_Jambeli:Surface Water Inflow[CMS]");
    
    // WEAP.ResultSetting("Scenario", "15 \\ Aguas_ab_Jambeli");
    // WEAP.ResultSetting("Scenario", "Escenarios_juego", "C3 River", "15 \\ Aguas_ab_Jambeli");
    WEAP.ResultSetting("Year", "All");
    WEAP.ResultSetting("XAxis", "Year");
    WEAP.ResultSetting("Month", "All");
    // WEAP.ResultSetting("Tag Category", "15 \\ Aguas_ab_Jambeli");
    
    // WEAP.ResultSetting("Branch", "All");
    // WEAP.ResultSetting("Levels",  2);

    // WEAP.ResultSetting("Branch", "C3 River Nodes and Reaches");

    // WEAP.ResultSetting("Branch", "15 \\ Aguas_ab_Jambeli");

    // WEAP.SaveArea

    // Selected C3 River Nodes and Reaches
    // All C3 River Nodes and Reaches

    // WEAP.ResultSetting("River", "C3 River");
    // WEAP.ResultSetting("Year", "All");
    // WEAP.ResultSetting("Year", "All");
    
// WEAP.ResultSetting("XAxis") = "Year"
    WEAP.ExportResults("C:\\CSV2\\Streamflow.csv");
    
    // WEAP.ResultSetting("Variable", "Streamflow");
    // WEAP.ResultSetting("Variable", "Streamflow");
    // WEAP.ResultSetting("Variable", "Streamflow");
    // WEAP.ExportResults("C:\\CSV2\\Coverage.csv");
    
    // WEAP.ResultSetting("Variable", "Hydropower Turbine Flow");
    // WEAP.ResultSetting("Variable", "Hydropower Turbine Flow");
    // WEAP.ResultSetting("Variable", "Hydropower Turbine Flow");
    // WEAP.ExportResults("C:\\CSV2\\HydropowerTurbineFlow.csv");
    

    // WEAP.ResultSetting("Variable") = "Inflows To Area";
    // WEAP.ResultSetting("Branch").set("\\Supply and Resources\\Reservoir\\Hydropower Turbine Flow");
    // WEAP.Calculate(0, 0, false);
    // WEAP.resultSetting("Variable");
    // console.log(WEAP.resultSetting("Variable"));
    // WEAP.Branch("\\Supply and Resources\\Reservoir\\Hydropower Turbine Flow");
    // WEAP.ExportResults("C:\\CSV2\\HydropowerTurbineFlow.csv");
    
    //Demand Site Coverage (% of requirement met) river c1...
    // WEAP.Branch("\\Supply and Resources\\Demand Site\\Coverage");
    // WEAP.ExportResults("C:\\CSV2\\Coverage.csv");
    
    //
    // WEAP.Branch("\\Supply and Resources\\River\\Streamflow");
    // WEAP.ExportResults("C:\\CSV2\\Streamflow.csv");
    

    
    // WEAP.ResultSetting("Year") = "All";
    // WEAP.Visible = TRUE
    // WEAP.Visible = FALSE
    // WEAP.UserID = "JGS"
    // WEAP.SaveAreaAs("Weaping River Basin Copy")


}

export function __makeDirectory(){
    
    // const app = require('electron').remote.app;
    // const remote = require('remote');
    // app = remote.require('app');

    // const basepath = this.app.getAppPath();
    // console.log(GameSpecifications.appPath);
    // const app.getAppPath()
    // const fs = require('fs');
    
    const fs = (window as any).fs;
    // const path = (window as any).path;
    const dir = 'C:/CSV2';
    // const path = require("path");

    // const __dirname = require("path").dirname(require('electron').remote.app.getAppPath())
    // const __dirname = path.resolve();
    // console.log(__dirname);
    // import path from 'path';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
}
*/