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
    const camposRango = camposRangoAreaPisos();
    const range = camposRango.range;
    const columnasCampos = utils.sheet_to_json(worksheet, {
      range,
      defval: null,
    }) as [];
    // @ts-ignore
    console.log("resultado csv parseado", columnasCampos[0].__EMPTY)
    console.log("resultado csv parseado", columnasCampos)
    dataAxisXY(columnasCampos);
    return fileBuffer
  }
}
export interface CSVINTERFASE {
}
export function camposRangoAreaPisos() {
  const rangoCamposexcel = {
    s: { c: 0, r: 3 },
    e: { c: 744, r: 17 },
  };
  const camposAreaPiso = [
    'nombre',
    'descripcion',
    'nivel',
    'habilitado',
  ];
  return { header: camposAreaPiso, range: rangoCamposexcel };
}
export function dataAxisXY(columnasCamposDatos: []){
  columnasCamposDatos.filter( (fila)=> {
    const object = Object.entries(fila).filter(([key, value]) => {
      // 01/01/20
      // 1 al 12 meses

    //  console.log(key, "key");
     // console.log(value, "value ");

    })
    console.log(fila, "fila ");
  })

}
