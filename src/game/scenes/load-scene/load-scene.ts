import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { loadSceneElementsSpecifications } from "./load-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import {GameSpecifications, servicioGraficaAC} from "../../settings/game-system-specifications";
import { getConservationAreData } from "../../functions/conservation-area-data-functions/conservation-area-data";

import winax from "winax";

export class LoadScene extends Phaser.Scene {

  private gameFacade: GameFacade;
  private sceneGameObjects;
  private sceneData: SceneDataInterface;

  private sceneBackground: Phaser.GameObjects.Image;

  init(sceneData: SceneDataInterface) {
    this.sceneData = sceneData;
  }

  constructor() {
    super({
      key: GameSceneIdsStrings.LOAD_SCENE_ID
    });
    this.sceneGameObjects = new Map();
  }

  create() {
    this.generateScene();
    this.getElements();

    // setTimeout(() => {
    //     this.loadWeapValue();
    // }, 100);
    servicioGraficaAC.serviceArea.habilitarActualizacion();


    setTimeout(() => {
      this.startNextScene();
    }, 1000);
  }

  private generateScene() {
    this.gameFacade = new GameFacade(this, loadSceneElementsSpecifications);
    this.sceneGameObjects = this.gameFacade.getGameObjects;
  }

  private getElements() {
    this.sceneBackground = this.sceneGameObjects.get(
      GameSceneElementsString.SCENE_BACKGROUND
    ).gameObject;
    this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);
  }

  private loadWeapValue() {
    const WEAP = new winax.Object("WEAP.WEAPApplication");
    WEAP.ActiveArea = "Tesis_IR_6";
    WEAP.ActiveScenario = "Escenarios_juego";

    WEAP.ExportResults("C:\\CSV\\datos_game.csv");
    // WEAP.BranchVariable("\\Key\\Kc\\Agricola").Expression = 1.5;
    // WEAP.ExportResults("C:\\CSV\\datos_game2.csv");

    for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
      for(let decisionOptionId in GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options) {
        const decisionOptionWasSelected = GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options[decisionOptionId].decision_option_was_selected;
        const decisionOptionWeapVariable = GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options[decisionOptionId].decision_option_weap_variable;
        const decisionOptionValue = GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options[decisionOptionId].decision_option_value;

        if (decisionOptionWasSelected) {
          WEAP.BranchVariable(decisionOptionWeapVariable).Expression = decisionOptionValue;
        } else {
          WEAP.BranchVariable(decisionOptionWeapVariable).Expression = 0;
        }

      }
    }
    WEAP.ExportResults("C:\\CSV\\datos_game2.csv");
    this.startNextScene();

  }

  private startNextScene() {

    servicioGraficaAC.serviceArea.deshabilitarActualizacion();
    this.scene.stop();
    this.scene.wake(this.sceneData.returnSceneName, {data:'runnnn'});
  }
}
