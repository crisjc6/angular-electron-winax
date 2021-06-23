import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { warningMessageSceneElementsSpecifications } from "./warning-message-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameRouterLink, GameSpecifications, gameStatus } from "../../settings/game-system-specifications";

export class WarningMessageScene extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;
    private sceneData: SceneDataInterface;

    private sceneBackground: Phaser.GameObjects.Image;
    private continueButton: ButtonComponent;
    private cancelButton: ButtonComponent;

    init(sceneData: SceneDataInterface) {
        this.sceneData = sceneData;
        GameSpecifications.currentDecisionIndex = 0;
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.WARNING_MESSAGE_SCENE_ID
        });
        this.sceneGameObjects = new Map();
    }

    create() {
        this.generateScene();
        this.getElements();
        this.addFunctionality();
    }

    private generateScene() {
        this.gameFacade = new GameFacade(this, warningMessageSceneElementsSpecifications);
        this.sceneGameObjects = this.gameFacade.getGameObjects;
    }

    private getElements() {
        this.sceneBackground = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_BACKGROUND
        ).gameObject;
        this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);

        this.cancelButton = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_CANCEL_BUTTON
        ).gameObject;

        this.continueButton = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_CONTINUE_BUTTON
        ).gameObject;
    }

    private addFunctionality() {
        this.cancelButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.stop(this.scene.key);
                gameStatus.status = 'mapScene';
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );

        this.continueButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                gameStatus.status = 'mainScene';
                gameRouterLink.routerLink.navigate(['/']);
            }
        );
    }
}