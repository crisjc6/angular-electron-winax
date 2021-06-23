import {Injectable} from "@angular/core";
import * as ElectronStore from 'electron-store';
import {GameScoreDataInterface} from "../../../game/interfaces/game-score-interface";
@Injectable(
  {
    providedIn: 'root',
  }
)
export class ScoreService  {
  private store: ElectronStore;
  constructor() {
    if (window.require) {
      try {
        const storeClass = window.require("electron-store");
        this.store = new storeClass();
      } catch (e) {
        throw e;
      }
    } else {
      console.warn("electron-store was not loaded");
    }
  }
  getPuntajes = (): any => {
    return this.store.get('puntajes');
  }
  setPuntajes = (key: string, value: any): void => {
    console.log("key", key);
    console.log("key", JSON.stringify(value));
    this.store.set(key, value);
  }
  save(puntajeNuevo: GameScoreDataInterface) {
    let puntajesGEt = this.getPuntajes();
    console.log('puntajes inicio', puntajesGEt);
    puntajesGEt.push({
      teamName: puntajeNuevo.teamName,
      score:puntajeNuevo.score
    })
    const valoresSort =  (p) => {
      return puntajesGEt.slice(0).sort((a,b) => {
        return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
      });
    }
    puntajesGEt = valoresSort('score');
    this.setPuntajes("puntajes", puntajesGEt);
    console.log(this.getPuntajes(), "puntajes");
    return this.getPuntajes();
  }
}
