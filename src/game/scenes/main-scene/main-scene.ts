// import { ButtonComponent } from "././.components/button-component/button-component";
// import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
// import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
// import { AlingString, ColorsString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";
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
import { gameRouterLink, phaserGameObject } from "../../settings/game-system-specifications";
import { SceneGameElementsString } from "../../settings/game-constants-strings/game-elements-strings";

// {
//     key: 'continue-button-background',
//     path: '../../assets/game_assets/boot-load-assets/buttons-assets/continue-button-background.png'
// },

export class MainScene extends Phaser.Scene {
    
    private gameObjects: any;
    private weapService: WeapService;
    
    private playButton: ButtonComponent;
    private scoreButton: ButtonComponent;
    private settingsButton: ButtonComponent;
    private infoButton: ButtonComponent;
    private viewMoreButton: ButtonComponent;
    private sceneData: SceneDataInterface;

    init() {

    }
    
    constructor() {
        super({
            key: GameSceneIdsStrings.MAIN_SCENE_ID
        });
        
        this.weapService = new WeapService();
    }

    preload() {
        loadFonts();
        loadAssetsArrayGame(this, gameAssets);  
        // this.load.image(
        //     'continue-button-background',
        //     '../../../assets/game-assets/continue-button-background.png'
        // );
        
        this.gameObjects = new Map();
    }

    create() {
        const fachada = new GameFacade(this, sceneElemntSpecifictions);
        this.gameObjects = fachada.getGameObjects;

        this.getElements();
        this.addFunctionality();
        // const button = this.gameObjects.get('play-button').gameObject as ButtonComponent;
        // button.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         // this.sys.game.destroy(true);
        //             this.scene.pause();
        //             gameRouterLink.routerLink.navigate(['/detail']);
        //     }
        // );

            
        // const buttonSettings = this.gameObjects.get('settings-button').gameObject as ButtonComponent;
        // buttonSettings.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         console.log('settings scene');
        //         this.scene.pause();
        //         const gameData: SceneDataInterface = {
        //             returnSceneName: this.scene.key
        //         }
        //         this.scene.launch(GameSceneIdsStrings.SETTINGS_SCENE_ID, gameData);
        //     }
        // );

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
                // this.scene.sleep(this.scene.key);
                // const scenedata: SceneDataInterface = {
                //     returnSceneName: this.scene.key
                // };
                // this.scene.launch(GameSceneIdsStrings.TOP_BEST_PLAYER_SCENE, scenedata);
            }
        );

        // addPointerOverOnInteractiveObject(this.playButton);
        this.playButton.setInteractive().on(   
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                // disableUpdateSceneData(this.gameData);
                // this.gameData.returnSceneName = this.scene.key;
                // this.scene.start(ScenesStrings.MAP_SCENE, this.gameData);
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
    }

}