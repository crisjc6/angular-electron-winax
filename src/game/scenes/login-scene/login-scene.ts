import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { loginSceneElementsSpecifications } from "./login-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { SceneGameElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameRouterLink } from "../../settings/game-system-specifications";

export class LoginScene extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;
    private sceneData: SceneDataInterface;

    private sceneBackground: Phaser.GameObjects.Image;
    private closeButton: ButtonComponent;
    private continueButton: ButtonComponent;
    

    init(sceneData: SceneDataInterface) {
        this.sceneData = sceneData;
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.LOGIN_SCENE_ID
        });
        this.sceneGameObjects = new Map();
    }

    create() {
        
        this.generateScene();
        this.getElements();
        this.addFunctionality();
    }

    private generateScene() {
        this.gameFacade = new GameFacade(this, loginSceneElementsSpecifications);
        this.sceneGameObjects = this.gameFacade.getGameObjects;

    }

    private getElements() {
        
        this.sceneBackground = this.sceneGameObjects.get(
            SceneGameElementsString.SCENE_BACKGROUND
        ).gameObject;
        this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);

        this.closeButton = this.sceneGameObjects.get(
            SceneGameElementsString.SCENE_CLOSE_BUTTON
        ).gameObject;

        this.continueButton = this.sceneGameObjects.get(
            SceneGameElementsString.SCENE_CONTINUE_BUTTON
        ).gameObject;
    }

    private addFunctionality() {
    //     addTintOnGameButton(this.closeButton);
        this.closeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.stop(this.scene.key);
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );

        // addPointerOverOnInteractiveObject(this.saveSettingsButtons);
        this.continueButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                gameRouterLink.routerLink.navigate(['/detail']);
            }
        );
    }
}