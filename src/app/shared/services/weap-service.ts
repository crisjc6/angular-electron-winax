import { Injectable } from "@angular/core";
import winax from "winax";
import * as fs from 'fs';
import * as path from 'path';

// @ts-ignore
@Injectable({ providedIn: "root" })
export class WeapService {
  constructor() {

  }

  openWeap() {
      const WEAP_App = new winax.Object("WEAP.WEAPApplication");
/*
      WEAP_App.ActiveArea = "SimBasinModel";
      WEAP_App.ActiveScenario = "SimBasin";
      // WEAP_App.Scenarios("Current Accounts").Activate
      WEAP_App.Visible = true;

      // const resultado = WEAP_App.ResultValue("\Demand Sites\South City:Reliability")
      const branchName =  WEAP_App.ActiveScenario.Name;
      const areasAccount = WEAP_App.Areas.Count;
      console.log("Nombre del escenari actual: "+branchName+"\n");
      console.log("cantidad de areas: "+areasAccount);

*/


    WEAP_App.ActiveArea = "SimBasinModel";
    WEAP_App.ActiveScenario = "SimBasin";

    // for (let index = 1; index <= WEAP_App.Scenarios.Count; index++) {
    //     console.log(WEAP_App.Scenarios(index).Name+'\n');
    // }

    // WEAP_App.ActiveScenario = "SimBasin";

    // for (let index = 1; index <= WEAP_App.Branch("\Demand Sites").Children.Count; index++) {
    //     console.log(WEAP_App.Branch("\Demand Sites").Children(index).Name+'\n');
    // }

    // console.log(WEAP_App.ResultValue("\Demand Sites and Catchments\Napa:Agricola"));
    // Key\Kc\Agricola

    console.log(WEAP_App.ResultValue("Key\\Kc\\Agricola"));
    console.log(WEAP_App.ResultValue('Key\\AgriGrowth'));
    console.log(WEAP_App.BaseYear);

    // WEAP.EndYear = 2020
    // PRINT WEAP.EndYear
    console.log(WEAP_App.EndYear);
    // WEAP_App.Branch("Key\\Kc").Variables("Agricola").Expression = "2"

    WEAP_App.ExportResults("C:\\CSV\\Groundwater.csv");
    const variable = WEAP_App.ExportResults("C:\\CSV\\Groundwater.csv");
    console.log(variable,' respuesta de la variable')
    WEAP_App.BranchVariable("\\Key\\Kc\\Agricola").Expression = 1.5;

    console.log(WEAP_App.ResultValue('Key\\Kc\\Agricola'));
    WEAP_App.ExportResults("C:\\CSV\\Groundwater2.csv");

    // WEAP_App.Calculate(2020, 5, false);
    // WEAP_App.ExportResults("C:\\CSV\\Groundwater.csv");
    // WEAP_App.ExportResults("./assets/Groundwater.csv");
    // WEAP_App.ExportResults("C:\\CSV\\Groundwater.csv", true, false, true, true);
    // WEAP_App.View = "Results"

    // FOR i = 1 to WEAP.Branch("\Demand Sites").Children.Count
    //   PRINT WEAP.Branch("\Demand Sites").Children(i).Name
    // NEXT

    // var fs = require('fs');
    // console.log(__dirname);
    // fs.readFile(
    //   path.join(__dirname, '../../client/index.html'),
    //   'utf8', (error, data) => {
    //     // ...
    //   }
    // )


  }


}
