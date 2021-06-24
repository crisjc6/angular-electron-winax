import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { loadSceneElementsSpecifications } from "./load-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { GameSpecifications, gameStatus, servicioGraficaAC } from "../../settings/game-system-specifications";
import { getDataWeap, runWEAP } from "../../functions/weap-data-functions/weap-data-functions"

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
    // this.animateTextLoad();
    setTimeout(() => {
      // this.startNextScene();
      this.loadWeapValue();
    }, 1);
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
    // const weapApi = runWEAP();
    
    // for (let periodoId in GameSpecifications.gameDecisionsData) {
    //   for (let decisionId in GameSpecifications.gameDecisionsData[periodoId].decisions) {
    //     for (let decisionOptionId in GameSpecifications.gameDecisionsData[periodoId].decisions[decisionId].decision_options) {
    //       const decisionOptionWasSelected = GameSpecifications.gameDecisionsData[periodoId].decisions[decisionId].decision_options[decisionOptionId].decision_option_was_selected;
    //       const decisionOptionWeapVariable = GameSpecifications.gameDecisionsData[periodoId].decisions[decisionId].decision_options[decisionOptionId].decision_option_weap_variable;
    //       const decisionOptionValue = GameSpecifications.gameDecisionsData[periodoId].decisions[decisionId].decision_options[decisionOptionId].decision_option_value;
    //       if (decisionOptionWasSelected) {
    //         weapApi.BranchVariable(decisionOptionWeapVariable).Expression = decisionOptionValue;
    //       } else {
    //         weapApi.BranchVariable(decisionOptionWeapVariable).Expression = 0;
    //       }
    //     }
    //   }
    // }

    // getDataWeap(weapApi);
    
    servicioGraficaAC.serviceArea.habilitarActualizacion();
    this.startNextScene();
  }

  private startNextScene() {
    servicioGraficaAC.serviceArea.deshabilitarActualizacion();
    gameStatus.status = GameSpecifications.decisionPeriodIds.length > 0 ? 'mapScene' : 'game-over';
    this.scene.stop();
    this.scene.wake(this.sceneData.returnSceneName);
  }
}
