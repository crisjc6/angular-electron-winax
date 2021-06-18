import {EventEmitter, Injectable} from "@angular/core";
import {getConservationAreData} from "../../../game/functions/conservation-area-data-functions/conservation-area-data";
// import {conservationAreasData} from "../../../game/settings/conservation_areas_data";
import {getHydropowerChartData} from '../../../game/functions/hydropower-turbine-data-functions/hydropower-turbine-data-functions';
import {getDemandSiteChartData} from '../../../game/functions/demand-site-data-functions/demand-site-data-functions';
import {getStreamFlowChartData} from '../../../game/functions/streamflow-data-function/streamflow-data-function';

// import {HydropowerChartData} from "../../../game/settings/hydropower_turbine_data";
import { gameData } from "../../../game/settings/game-data/game-data";

@Injectable({ providedIn: "root" })
export class GraficaAreaConvervacionService {
  seActualizoDatos: EventEmitter<boolean> = new EventEmitter();

  habilitarActualizacion() {
    this.seActualizoDatos.emit(true)
  }
  deshabilitarActualizacion() {
    this.seActualizoDatos.emit(false)
  }

  exportarDataXY() {
    getConservationAreData();
    getHydropowerChartData();
    getDemandSiteChartData();
    getStreamFlowChartData();
    // readStreamflowCSV();
    console.log(gameData);
    return gameData;
  }
}
