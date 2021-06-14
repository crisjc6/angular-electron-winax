import {EventEmitter, Injectable} from "@angular/core";
import { read, WorkBook, utils, WorkSheet } from 'xlsx';
import {getConservationAreData} from "../../../game/functions/conservation-area-data/conservation-area-data";
import {conservationAreasData} from "../../../game/settings/conservation_areas_data";

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
    return conservationAreasData;
  }
}
