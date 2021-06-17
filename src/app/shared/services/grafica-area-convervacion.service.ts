import {EventEmitter, Injectable} from "@angular/core";
import {getConservationAreData} from "../../../game/functions/conservation-area-data/conservation-area-data";
// import {conservationAreasData} from "../../../game/settings/conservation_areas_data";
import {getHydropowerChartData} from '../../../game/functions/hydropower-turbine-data-functions/hydropower-turbine-data-functions';
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
    return gameData;
  }
}
