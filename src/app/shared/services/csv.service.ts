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
    console.log("resultado csv parseado empty", columnasCampos[0].__EMPTY)
    console.log("resultado csv parseado", columnasCampos)
    //dataAxisXY(columnasCampos);
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
  return {  range: rangoCamposexcel };
}
export function dataAxisXY(columnasCamposDatos: []){
  const anios = [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
  columnasCamposDatos.filter( (fila)=> {
    const valores: valores[] = [];
    const object = Object.entries(fila).filter(([key, value]) => {
      anios.forEach(
        (valor)=> {
          if(key.endsWith(`/${valor}`)) {
            valores.push({
              anio: valor,
              valor: +value,
              // @ts-ignore
              clase: fila.__EMPTY,
            });
            console.log(`valoroes `, valores[0].clase)
            console.log(`valoroes `, valores[0].anio)
            console.log(`valoroes `, valores.length)
            console.log(`anños 20${valor}`, key)
            console.log(`valroes 20${valor}`, value)
          }
        }
      )
      // key  /01/01/20
      // value 154515454


      // const arreglocadena: string[] = key.split("/");
      // const ultimoValorAnio: number = +arreglocadena[arreglocadena.length-1]
      // const valorMes: number = +arreglocadena[arreglocadena.length-2]
      // if (+ultimoValorAnio >= 20 && +ultimoValorAnio <= 30 ){
      //  const valore = this.anios.forEach((anio)=> {
      //     return this.reduce(function(groups, item) {
      //       const val = item[key]
      //       groups[val] = groups[val] || []
      //       groups[val].push(item)
      //       return groups
      //     }, {})
      //   })
      //   console.log("valores", valores);
      //   console.log("ano6 20-30: ",key+ value);
      //   console.log("fila 20-30",fila);
      // } else if (+ultimoValorAnio > 30 && +ultimoValorAnio <= 40 ) {
      //
      //   console.log("ano 30-40: ",key+ value);
      // } else if (+ultimoValorAnio > 40 && +ultimoValorAnio <= 50 ) {
      //   console.log("ano 40-50:",key+ value);
      // }
    })
    console.log(fila, "fila ");
  })

}
export interface valoresGrafica {
  series: [
    {
      name: string;//zona1
      data: [number]; // [24524,2452] promedio en 10 años
    }
  ];
  xaxis: {
    categories:[string]; // ["2020","2030"]
  }
  yaxis: {
    title: {
      text: string
    },
    min: number,
    max: number
  }
}
export interface valores {
  mes?: number;
  anio: number;
  valor: number;
  clase: string;
}
export function calcularPromedioAnio(valoresMeses: valores[]) {
  const anio = 0;
  const promedio = valoresMeses.reduce((total, next) => total + next.valor, 0) / valoresMeses.length;
  console.log(promedio);
  return {anio, promedio}
}
