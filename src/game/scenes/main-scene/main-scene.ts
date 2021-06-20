import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { mainSceneElementSpecifictions } from "./main-scene-elements-specificactions";
import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "./../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "./../../settings/game-constants-strings/game-events-strings";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameAssets } from "../../settings/game-assets";
import { gameStatus } from "../../settings/game-system-specifications";
import { buttonElements, IconsKeyStrings, GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { switchGameSoundStatus } from '../../functions/sound-functions/sound-function'; 

export class MainScene extends Phaser.Scene {
    
    private gameObjects: any;    
    private playButton: ButtonComponent;
    private scoreButton: ButtonComponent;
    private soundButton: ButtonComponent;
    private infoButton: ButtonComponent;
    private helpButton: ButtonComponent;

    init() {
        gameStatus.status = 'mainScene'; 
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
        const fachada = new GameFacade(this, mainSceneElementSpecifictions);
        this.gameObjects = fachada.getGameObjects;
        this.getElements();
        this.addFunctionality();
        this.updateSoundButtonStatus();
    }

    update() {

    }

    private getElements() {
        
        this.scoreButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_SCORE_BUTTON,
        ).gameObject;

        this.playButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_PLAY_BUTTON,
        ).gameObject;

        this.soundButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_SOUND_BUTTON,
        ).gameObject;

        this.infoButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_INFO_BUTTON,
        ).gameObject;

        this.helpButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_HELP_BUTTON,
        ).gameObject;

    }
    
    private addFunctionality() {
        // addPointerOverOnInteractiveObject(this.scoreButton);
        this.scoreButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
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
                // this.scene.pause();
                // gameRouterLink.routerLink.navigate(['/detail']);
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.LOGIN_SCENE_ID, gameData);
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
        
        // addSettingsButtonFunctionality(this, this.settingsButton);
        this.soundButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                switchGameSoundStatus(this, this.soundButton, true);
            }
        );
    }

    private updateSoundButtonStatus() {
        const buttonBackground = this.soundButton.getByName(buttonElements.BUTTON_BACKGROUND) as Phaser.GameObjects.Image;
        if (gameStatus.isSoundMuted === true) {
            buttonBackground.setTexture(IconsKeyStrings.OFF_SOUND_ICON);
        } else {
            buttonBackground.setTexture(IconsKeyStrings.ON_SOUND_ICON);
        }
    }
}
