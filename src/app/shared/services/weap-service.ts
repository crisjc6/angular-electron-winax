import { Injectable } from "@angular/core";
import winax from "winax";

// @ts-ignore
@Injectable({ providedIn: "root" })
export class WeapService {
  constructor() {

  }

  openWeap() {
      const WEAP_App = new winax.Object("WEAP.WEAPApplication");

      WEAP_App.ActiveArea = "SimBasinModel";
      WEAP_App.ActiveScenario = "SimBasin";
      // WEAP_App.Scenarios("Current Accounts").Activate
      WEAP_App.Visible = true;

      // const resultado = WEAP_App.ResultValue("\Demand Sites\South City:Reliability")
      const branchName =  WEAP_App.ActiveScenario.Name;
      const areasAccount = WEAP_App.Areas.Count;
      console.log("Nombre del escenari actual: "+branchName+"\n");
      console.log("cantidad de areas: "+areasAccount);

  }
}
