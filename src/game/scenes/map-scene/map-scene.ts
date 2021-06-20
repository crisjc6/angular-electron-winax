import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { mapSceneElemntSpecifictions } from "./map-scene-elements-specificactions";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameMapAssets } from "../../settings/game-map-assets";
import { gameRouterLink, GameSpecifications, gameStatus } from "../../settings/game-system-specifications";
import { GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameData } from "../../settings/game-data/game-data";

export class MapScene extends Phaser.Scene {

    private gameObjects: any;
    private sceneBackground: Phaser.GameObjects.Image;
    private playButton: ButtonComponent;
    private homeButton: ButtonComponent;
    private totalScore: Phaser.GameObjects.Text;

    // private scoreButton: ButtonComponent;
    // private soundButton: ButtonComponent;
    // private infoButton: ButtonComponent;
    // private helpButton: ButtonComponent;
    private sceneData: SceneDataInterface;

    init(data) {
        gameStatus.status = 'mapScene';
        // this.updateSceneScore();
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.MAP_SCENE_ID
        });
    }

    preload() {
        loadFonts();
        loadAssetsArrayGame(this, gameMapAssets);
        this.gameObjects = new Map();
    }

    create() {
        const fachada = new GameFacade(this, mapSceneElemntSpecifictions);
        this.gameObjects = fachada.getGameObjects;

        this.getElements();
        this.addFunctionality();
        this.updateSceneScore();
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

        this.totalScore = this.gameObjects.get(
            GameSceneElementsString.SCENE_TOTAL_SCORE
        ).gameObject;

        this.playButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_CONTINUE_BUTTON,
        ).gameObject;

        this.homeButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_HOME_BUTTON,
        ).gameObject;
        // this.soundButton = this.gameObjects.get(
        //     SceneGameElementsString.SCENE_SOUND_BUTTON,
        // ).gameObject;

        // this.infoButton = this.gameObjects.get(
        //     SceneGameElementsString.SCENE_INFO_BUTTON,
        // ).gameObject;

        // this.helpButton = this.gameObjects.get(
        //     SceneGameElementsString.SCENE_HELP_BUTTON,
        // ).gameObject;

    }

    private addFunctionality() {

        this.events.on(
            'wake',
            () => {
                GameSpecifications.gameOver = !(GameSpecifications.decisionPeriodIds.length > 0);
                console.log(GameSpecifications.gameOver);
                this.updateSceneScore();
            }
        );

        // scene.events.on('wake', function(){});

        // addPointerOverOnInteractiveObject(this.scoreButton);
        // this.scoreButton.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         this.scene.pause();
        //         const gameData: SceneDataInterface = {
        //             returnSceneName: this.scene.key
        //         }
        //         this.scene.launch(GameSceneIdsStrings.TOP_BEST_PLAYER_SCENE_ID, gameData);
        //     }
        // );

        // addPointerOverOnInteractiveObject(this.playButton);
        this.playButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                if (GameSpecifications.decisionPeriodIds.length > 0) {
                    this.scene.pause();
                    const gameData: SceneDataInterface = {
                        returnSceneName: this.scene.key
                    }
                    this.scene.launch(GameSceneIdsStrings.DECISION_MAKING_SCENE_ID, gameData);
                }

            }
        );

        this.homeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                // this.scene.pause();
                gameStatus.status = 'mainScene';
                gameRouterLink.routerLink.navigate(['/']);
            }
        );

        // addPointerOverOnInteractiveObject(this.infoButton);
        // this.infoButton.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         this.scene.pause();
        //         const gameData: SceneDataInterface = {
        //             returnSceneName: this.scene.key
        //         }
        //         this.scene.launch(GameSceneIdsStrings.INFO_SCENE_ID, gameData);
        //     }
        // );

        // addPointerOverOnInteractiveObject(this.infoButton);
        // this.helpButton.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         this.scene.pause();
        //         const gameData: SceneDataInterface = {
        //             returnSceneName: this.scene.key
        //         }
        //         this.scene.launch(GameSceneIdsStrings.HELP_SCENE_ID, gameData);
        //     }
        // );

        // addSettingsButtonFunctionality(this, this.settingsButton);
        // this.soundButton.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         switchGameSoundStatus(this, this.soundButton, true);
        //         // this.scene.pause();
        //         // const gameData: SceneDataInterface = {
        //         //     returnSceneName: this.scene.key
        //         // }
        //         // this.scene.launch(GameSceneIdsStrings.SETTINGS_SCENE_ID, gameData);
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

    private updateSceneScore() {
      if (this.totalScore !== undefined) {
        this.totalScore.setText('PUNTAJE: ' + gameData.playerData.score);
        if (GameSpecifications.gameOver) {
            setTimeout(
                () => {
                    this.scene.pause();
                    this.scene.start(GameSceneIdsStrings.END_SCENE_ID);
                },
                10
            );
        }
      }
    }

}
