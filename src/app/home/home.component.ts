import { WeapService } from "../shared/services/weap-service";
import { gameRouterLink, GameSpecifications, servicioPuntajes } from "../../game/settings/game-system-specifications";
// const fs = (<any>window).require("fs");

import { WordService } from "../shared/services/word-service";
import { phaserGameConfig } from "../../game/settings/phaser-game-config-specifications";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { ScoreService } from "../shared/services/puntaje.service";

const myid = "123445";
const vsinfo = `das ist ja mal eine Info\nund was für eine!`;
const kafkaText = `Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte,\n wurde er eines Morgens verhaftet.\n »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.`;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  private game: Phaser.Game;

  constructor(
    private wordService: WordService,
    private weapService: WeapService,
    private _router: Router,
    private scoreService: ScoreService,
  ) {
    servicioPuntajes.serviceScore = scoreService;
    gameRouterLink.routerLink = this._router;
  }

  ngOnInit(): void {
      this.game = new Phaser.Game(phaserGameConfig);
      GameSpecifications.canvasWidth = this.game.canvas.width;
      GameSpecifications.canvasHeight = this.game.canvas.height;
  }

  openTestDocument(): void {
    this.weapService.openWeap();
  }

  close(): void {
    this.wordService.close();
  }

  quit(): void {
    this.wordService.quit();
  }
}
