import { GameSpecifications } from "../../settings/game-system-specifications";
// import { app } from "electron/main";
import winax from "winax";

export function runWEAP() {
    const WEAP = new winax.Object("WEAP.WEAPApplication");
    WEAP.Visible = true;
    WEAP.ActiveArea = "Tesis_IR_6";
    // WEAP.ActiveScenario = "Escenarios_juego";

    // WEAP.ResultSetting("Variable", "Coverage");
    // WEAP.ExportResults("C:\\CSV2\\Coverage.csv");

    //PrevTSValue(Aguas_ab_Jambeli:Streamflow[m^3])
    WEAP.ResultSetting("Variable", "Streamflow [Cubic Meters per Second]");
    WEAP.ResultSetting("Scenario", "Escenarios_juego, River: C3 River");
    // WEAP.ResultSetting("Branch", "Aguas_ab_Jambeli");
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

export function makeDirectory(){
    
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