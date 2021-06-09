import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { sceneElemntSpecifictions } from "./main-scene-elements-specificactions";
import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "./../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "./../../settings/game-constants-strings/game-events-strings";
import { WeapService } from "../../../app/shared/services/weap-service";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameAssets } from "../../settings/game-assets";
import { gameRouterLink } from "../../settings/game-system-specifications";
import { SceneGameElementsString } from "../../settings/game-constants-strings/game-elements-strings";

export class MainScene extends Phaser.Scene {
    
    private gameObjects: any;    
    private playButton: ButtonComponent;
    private scoreButton: ButtonComponent;
    private settingsButton: ButtonComponent;
    private infoButton: ButtonComponent;
    private helpButton: ButtonComponent;
    private sceneData: SceneDataInterface;

    init() {

    }
    
    constructor() {
        super({
            key: GameSceneIdsStrings.MAIN_SCENE_ID
        });
    }

    preload() {
        loadFonts();
        loadAssetsArrayGame(this, gameAssets);        
        this.gameObjects = new Map();
    }

    create() {
        const fachada = new GameFacade(this, sceneElemntSpecifictions);
        this.gameObjects = fachada.getGameObjects;

        this.getElements();
        this.addFunctionality();
    }

    update() {

    }

    
    private getElements() {
        
        this.scoreButton = this.gameObjects.get(
            SceneGameElementsString.SCENE_SCORE_BUTTON,
        ).gameObject;

        this.playButton = this.gameObjects.get(
            SceneGameElementsString.SCENE_PLAY_BUTTON,
        ).gameObject;

        this.settingsButton = this.gameObjects.get(
            SceneGameElementsString.SCENE_SETTINGS_BUTTON,
        ).gameObject;

        this.infoButton = this.gameObjects.get(
            SceneGameElementsString.SCENE_INFO_BUTTON,
        ).gameObject;

        this.helpButton = this.gameObjects.get(
            SceneGameElementsString.SCENE_HELP_BUTTON,
        ).gameObject;

    }
    
    private addFunctionality() {
        // addSettingsButtonFunctionality(this, this.settingsButton);
        this.settingsButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.SETTINGS_SCENE_ID, gameData);
            }
        );

        // addPointerOverOnInteractiveObject(this.scoreButton);
        this.scoreButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                console.log('score...');
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.TOP_BEST_PLAYER_SCENE_ID, gameData);
            }
        );

        // addPointerOverOnInteractiveObject(this.playButton);
        this.playButton.setInteractive().on(   
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.pause();
                gameRouterLink.routerLink.navigate(['/detail']);
            }
        );
        
        // addPointerOverOnInteractiveObject(this.infoButton);
        this.infoButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.INFO_SCENE_ID, gameData);
            }
        );

        // addPointerOverOnInteractiveObject(this.infoButton);
        this.helpButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.HELP_SCENE_ID, gameData);
            }
        );
    }

}