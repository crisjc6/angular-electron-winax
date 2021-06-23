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

  //This function returns the value of the key stored locally with electron-store.
  get = (key: string): any => {
    console.log("key", key);
    return this.store.get(key);
  }
  getPuntajes = (): any => {
    return this.store.get('puntajes');
  }


  /* And this other function sets the value of the key we want to store.
     (If the key already exists, the value will be replaced) */
  set = (key: string, value: any): void => {
    console.log("key", key + value);
    this.store.set(key, value);
  }

  setPuntajes = (key: string, value: any): void => {
    console.log("key", key);
    console.log("key", JSON.stringify(value));
    this.store.set(key, value);
  }
  readScore() {
  }
  updateScore() {

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
