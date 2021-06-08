import { WeapService } from "../shared/services/weap-service";
import { gameRouterLink, phaserGameObject } from "../../game/settings/game-system-specifications";
// const fs = (<any>window).require("fs");

import { Component, OnInit } from "@angular/core";
import { WordService } from "../shared/services/word-service";
import { phaserGameConfig } from "../../game/settings/phaser-game-config-specifications";
import { Router } from "@angular/router";
import { GameSceneIdsStrings } from "../../game/settings/game-constants-strings/game-scene-ids-string";

// const timer = (f) => {
//   const t = performance.now();
//   f();
//   return performance.now() - t;
// };

const myid = "123445";
const vsinfo = `das ist ja mal eine Info\nund was für eine!`;
const kafkaText = `Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte,\n wurde er eines Morgens verhaftet.\n »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.`;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  // private game: Phaser.Game;

  constructor(
    private wordService: WordService,
    private weapService: WeapService,
    private _router: Router
  ) {
    gameRouterLink.routerLink = this._router;
  }

  ngOnInit(): void {
    // if(phaserGameObject.game === null) {
      phaserGameObject.game = new Phaser.Game(phaserGameConfig);
      console.log('phaser...');
    // } else {
    //   phaserGameObject.game.scene.start(GameSceneIdsStrings.MAIN_SCENE_ID);
    //   phaserGameObject.game.;
    //   console.log(phaserGameObject.game);
    //   console.log('phaser existente');
    // }
  }

  openTestDocument(): void {
    this.weapService.openWeap();
  //  this.wordService.open("D:\\repos\\angular-electron-winax\\src\\assets\\tmp\\1.docx");
 //   this.wordService.setActiveDocumentById(myid);
  }

  // testEmpty(): void {
  //   const wordTrigger = `(doc, data) => {
  //     const t = data.helpers.toArray(doc.tables).find(t => t.title === "tabelle1");
  //     for ( let c = 1; c <= t.columns.count; c++ ){
  //       for ( let r = 1; r <= t.rows.count; r++ ){
  //         t.cell(r,c).range.text = "";
  //       }
  //     }
  //   }`;
  //   console.log(
  //     timer(() => {
  //       this.wordService.setActiveDocumentById(myid);
  //       this.wordService.runWordTrigger(wordTrigger, {});
  //       this.wordService.setTextfield("vsinfo", " ");
  //       for (let i = 1; i <= 15; i++)
  //         this.wordService.setTextfield(`cc${i}`, " ");
  //     })
  //   );
  // }

  // testFill(): void {
  //   console.log(
  //     timer(() => {
  //       this.wordService.setActiveDocumentById(myid);
  //       this.wordService.setTextfield("vsinfo", vsinfo);
  //       for (let i = 1; i <= 15; i++)
  //         this.wordService.setTextfield(`cc${i}`, kafkaText);
  //     })
  //   );
  // }

  // testFillEval(): void {
  //   const wordTrigger = `(doc, data) => {
  //     for (let i = 1; i <= 15; i++){
  //       const cc = doc.selectContentControlsByTag("cc" + i).item(1)
  //       cc.lockContents = false;
  //       cc.range.text = data.text;
  //       cc.lockContents = true;
  //     }
  //     const t = data.helpers.toArray(doc.tables).find(t => t.title === "tabelle1");
  //     for ( let c = 1; c <= t.columns.count; c++ ){
  //       for ( let r = 1; r <= t.rows.count; r++ ){
  //         t.cell(r,c).range.text = "Ich bin Zelle " + r + " " + c;
  //       }
  //     }
  //   }`;

  //   console.log(
  //     timer(() => {
  //       this.wordService.runWordTrigger(wordTrigger, {
  //         text: kafkaText,
  //       });
  //     })
  //   );
  // }
  close(): void {
    this.wordService.close();
  }

  quit(): void {
    this.wordService.quit();
  }
}
