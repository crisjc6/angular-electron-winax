import {EventEmitter, Injectable} from "@angular/core";
import { read, WorkBook, utils, WorkSheet } from 'xlsx';
import {getConservationAreData} from "../../../game/functions/conservation-area-data/conservation-area-data";
import {conservationAreasData} from "../../../game/settings/conservation_areas_data";
import {indicatorsScores} from "../../../game/settings/game-system-specifications";
import {getHydropowerChartData} from '../../../game/functions/hydropower-turbine-data-functions/hydropower-turbine-data-functions';
import {HydropowerChartData} from "../../../game/settings/hydropower_turbine_data";


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
    getHydropowerChartData();
    getConservationAreData();
    return {conservationAreasData, indicatorsScores, HydropowerChartData};
  }
}
