import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { introductionSceneElementSpecifictions } from "./introduction-scene-elements-specificactions";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameAssets } from "../../settings/game-assets";
import { gameRouterLink, gameStatus } from "../../settings/game-system-specifications";
import { buttonElements, IconsKeyStrings, GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { switchGameSoundStatus } from '../../functions/sound-functions/sound-function'; 
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameData } from "../../settings/game-data/game-data";

export class IntroductionScene extends Phaser.Scene {
    
    private gameObjects: any;    
    private continueButton: ButtonComponent;
    private soundButton: ButtonComponent;
    private homeButton: ButtonComponent;
    private sceneBackground: Phaser.GameObjects.Image;
    private sceneTitleText: Phaser.GameObjects.Text;

    init() {
        gameStatus.status = 'mainScene'; 
    }
    
    constructor() {
        super({
            key: GameSceneIdsStrings.INTRODUCTION_SCENE_ID
        });     
        this.gameObjects = new Map();
    }

    create() {
        const fachada = new GameFacade(this, introductionSceneElementSpecifictions);
        this.gameObjects = fachada.getGameObjects;
        this.getElements();
        this.addFunctionality();
        // this.updateSoundButtonStatus();
    }

    update() {

    }

    private getElements() {
        
        this.sceneBackground = this.gameObjects.get(
            GameSceneElementsString.SCENE_BACKGROUND
        ).gameObject;
        this.sceneBackground.setTint(ColorsValue.BLACK_HEXADECIMAL_VALUE);
        this.sceneBackground.setAlpha(0.5);

        this.continueButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_CONTINUE_BUTTON,
        ).gameObject;
        
        this.homeButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_HOME_BUTTON,
        ).gameObject;

        this.sceneTitleText = this.gameObjects.get(
            GameSceneElementsString.SCENE_TITLE_TEXT,
        ).gameObject;
        console.log(gameData.playerData.teamName);
        this.sceneTitleText.text += gameData.playerData.teamName;

        // this.soundButton = this.gameObjects.get(
        //     GameSceneElementsString.SCENE_SOUND_BUTTON,
        // ).gameObject;

        // this.infoButton = this.gameObjects.get(
        //     GameSceneElementsString.SCENE_INFO_BUTTON,
        // ).gameObject;

        // this.helpButton = this.gameObjects.get(
        //     GameSceneElementsString.SCENE_HELP_BUTTON,
        // ).gameObject;

    }
    
    private addFunctionality() {
        // addPointerOverOnInteractiveObject(this.playButton);
        this.continueButton.setInteractive().on(   
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                
                gameStatus.status = 'mapScene';
                gameRouterLink.routerLink.navigate(['/detail']);
                // this.scene.pause();
                // gameRouterLink.routerLink.navigate(['/detail']);
                // this.scene.pause();
                // const gameData: SceneDataInterface = {
                //     returnSceneName: this.scene.key
                // }
                // this.scene.launch(GameSceneIdsStrings.LOGIN_SCENE_ID, gameData);
            }
        );
    
            
        this.homeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                // this.scene.pause();
                gameStatus.status = 'mainScene';
                this.scene.start(GameSceneIdsStrings.MAIN_SCENE_ID);
            }
        );

        // // addSettingsButtonFunctionality(this, this.settingsButton);
        // this.soundButton.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         switchGameSoundStatus(this, this.soundButton, true);
        //     }
        // );
    }

    // private updateSoundButtonStatus() {
    //     const buttonBackground = this.soundButton.getByName(buttonElements.BUTTON_BACKGROUND) as Phaser.GameObjects.Image;
    //     if (gameStatus.isSoundMuted === true) {
    //         buttonBackground.setTexture(IconsKeyStrings.OFF_SOUND_ICON);
    //     } else {
    //         buttonBackground.setTexture(IconsKeyStrings.ON_SOUND_ICON);
    //     }
    // }
}
