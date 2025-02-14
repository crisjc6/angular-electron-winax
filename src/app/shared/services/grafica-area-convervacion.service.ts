import {EventEmitter, Injectable} from "@angular/core";
import {getConservationAreData} from "../../../game/functions/game-data-functions/conservation-area-data";
// import {conservationAreasData} from "../../../game/settings/conservation_areas_data";
import {getHydropowerChartData} from '../../../game/functions/game-data-functions/hydropower-turbine-data-functions';
import {getDemandSiteChartData} from '../../../game/functions/game-data-functions/demand-site-data-functions';
import {getStreamFlowChartData} from '../../../game/functions/game-data-functions/streamflow-data-function';

// import {HydropowerChartData} from "../../../game/settings/hydropower_turbine_data";
import { gameData } from "../../../game/settings/game-data/game-data";
import {getPopulationChartData} from "../../../game/functions/game-data-functions/population-data-funtions";
import {getPrecipitationChartData} from "../../../game/functions/game-data-functions/precipitation-data-funtions";

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
    getPopulationChartData();
    getPrecipitationChartData();
    console.log(gameData);
    return gameData;
  }
}
