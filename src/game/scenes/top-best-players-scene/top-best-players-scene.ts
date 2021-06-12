import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { topBestPlayersSceneElementsSpecifications } from "./top-best-players-scene-elements-specifications";
import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "./../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "./../../settings/game-constants-strings/game-events-strings";
import { GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";

export class TopBestPlayerScene extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;
    private sceneData: SceneDataInterface;
    
    private sceneBackground: Phaser.GameObjects.Image;
    private closeButton: ButtonComponent;

    init(_sceneData: SceneDataInterface) {
        this.sceneData = _sceneData;
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.TOP_BEST_PLAYER_SCENE_ID
        });
        this.sceneGameObjects = new Map();
    }

    create() {  
        this.generateScene();
        this.getElements();
        this.addFunctionality();
    }

    private generateScene() {
        this.gameFacade = new GameFacade(this, topBestPlayersSceneElementsSpecifications);
        this.sceneGameObjects = this.gameFacade.getGameObjects;
    }

    private getElements() {
        this.sceneBackground = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_BACKGROUND
        ).gameObject;
        this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);

        this.closeButton = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_CLOSE_BUTTON
        ).gameObject;
    }

    private addFunctionality() {
        // addTintOnGameButton(this.closeButton);
        this.closeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.stop(this.scene.key);
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );
    }
}