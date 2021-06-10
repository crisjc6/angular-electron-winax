import { Injectable } from "@angular/core";
import { read, WorkBook, utils, WorkSheet } from 'xlsx';

@Injectable({ providedIn: "root" })
export class CsvService {
  workbook: WorkBook;
  fs: any;
  areaPisosValidado: any;
  constructor() {
    this.fs = (window as any).fs;

  }
  printdirname() {
    const fileBuffer =  this.fs.readFileSync("C:/CSV/Groundwater.csv");
    this.workbook = read(fileBuffer);
    const first_sheet_name = this.workbook.SheetNames[0];
    const worksheet = this.workbook.Sheets[first_sheet_name];
    const numeroFilas: number = utils.sheet_to_json(worksheet).length;
    const camposRango = camposRangoAreaPisos(numeroFilas);
    const range = camposRango.range;
    const columnasConCamposEntity = utils.sheet_to_json(worksheet, {
      header: camposRango.header,
      range,
      defval: null,
    }) as [];
    console.log('file',fileBuffer);
    console.log('fiasdfsdfsdfdfle',columnasConCamposEntity);
    return fileBuffer
  }
}
export interface CSVINTERFASE {
}
export function camposRangoAreaPisos(numeroFilas: number) {
  const rangoCamposexcel = {
    s: { c: 0, r: 1 },
    e: { c: 3, r: numeroFilas },
  };
  const camposAreaPiso = [
    'nombre',
    'descripcion',
    'nivel',
    'habilitado',
  ];
  return { header: camposAreaPiso, range: rangoCamposexcel };
}
