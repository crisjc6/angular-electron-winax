import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { endSceneElementsSpecifications } from "./end-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameRouterLink, GameSpecifications, gameStatus } from "../../settings/game-system-specifications";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";

export class EndScene extends Phaser.Scene {

  private gameFacade: GameFacade;
  private sceneGameObjects;
  private sceneData: SceneDataInterface;

  private sceneBackground: Phaser.GameObjects.Image;
  private quitButton: ButtonComponent;

  init(sceneData: SceneDataInterface) {
    this.sceneData = sceneData;
  }

  constructor() {
    super({
      key: GameSceneIdsStrings.END_SCENE_ID
    });
    this.sceneGameObjects = new Map();
  }

  create() {
      this.generateScene();
      this.getElements();
      this.addFunctionality();
      this.addFunctionality();
  }

  private generateScene() {
      this.gameFacade = new GameFacade(this, endSceneElementsSpecifications);
      this.sceneGameObjects = this.gameFacade.getGameObjects;
  }

  private getElements() {
      this.sceneBackground = this.sceneGameObjects.get(
          GameSceneElementsString.SCENE_BACKGROUND
      ).gameObject;
      this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);

      this.quitButton = this.sceneGameObjects.get(
          GameSceneElementsString.SCENE_QUIT_BUTTON
      ).gameObject;
      this.quitButton.setX(this.sceneBackground.x);
  }

  private addFunctionality() {
      // addTintOnGameButton(this.closeButton);
      this.quitButton.setInteractive().on(
          EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
              // GameSpecifications.decisionPeriodIds.push(GameSpecifications.currentPeriodId);
              gameStatus.status = 'mainScene';
              this.scene.stop(this.scene.key);
              gameRouterLink.routerLink.navigate(['/']);
          }
      );
  }

  private updateDataScene(){
    
  }
}