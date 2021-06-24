import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { mapSceneElemntSpecifictions } from "./map-scene-elements-specificactions";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameMapAssets } from "../../settings/game-map-assets";
import { cursorURL, gameRouterLink, GameSpecifications, gameStatus } from "../../settings/game-system-specifications";
import { buttonElements, GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsString, ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameData } from "../../settings/game-data/game-data";
import { _gameObjectIconsMap } from "../../settings/game-decisions-data";

export class MapScene extends Phaser.Scene {

    private gameObjects: any;
    private sceneBackground: Phaser.GameObjects.Image;
    private playButton: ButtonComponent;
    private homeButton: ButtonComponent;
    private totalScore: Phaser.GameObjects.Text;
    private viewIconsTableText: Phaser.GameObjects.Text;
    private iconsTable: Phaser.GameObjects.Image;

    // private mapsIcons: Array<GameObjectIconsMap>;
    
    
    // private scoreButton: ButtonComponent;
    // private soundButton: ButtonComponent;
    // private infoButton: ButtonComponent;
    // private helpButton: ButtonComponent;
    private sceneData: SceneDataInterface;

    init() {
        gameStatus.status = 'mapScene';
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.MAP_SCENE_ID
        });
    }

    preload() {
        loadFonts();
        
        this.input.setDefaultCursor(cursorURL.defaultCursorURL);
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
        this.sceneBackground.setAlpha(0.1);

        this.totalScore = this.gameObjects.get(
            GameSceneElementsString.SCENE_TOTAL_SCORE
        ).gameObject;

        this.playButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_CONTINUE_BUTTON,
        ).gameObject;

        this.homeButton = this.gameObjects.get(
            GameSceneElementsString.SCENE_HOME_BUTTON,
        ).gameObject;

        this.viewIconsTableText = this.gameObjects.get(
            GameSceneElementsString.SCENE_VIEW_ICONS_TABLE,
        ).gameObject;

        this.iconsTable = this.gameObjects.get(
            GameSceneElementsString.SCENE_ICONS_TABLE,
        ).gameObject as Phaser.GameObjects.Image;
        this.iconsTable.setAlpha(0.9);
        this.hideMapIcons();
    }   

    private hideMapIcons() {
        this.iconsTable.setVisible(false);
        for (let iconId in _gameObjectIconsMap) {
            this.gameObjects.get(
                _gameObjectIconsMap[iconId].gameObjectName
            ).gameObject.disableInteractive();
            this.gameObjects.get(
                _gameObjectIconsMap[iconId].gameObjectName
            ).gameObject.setVisible(false);
        }
    }

    private addFunctionality() {

        this.viewIconsTableText.setInteractive({ cursor: cursorURL.interactiveCursorURL}).on(
            EventsTouchedGameObjectsStrings.POINTEROVER,
            () => {
                this.viewIconsTableText.setColor(ColorsString.RED_HEXADECIMAL_STRING);  
            }
        );

        this.viewIconsTableText.setInteractive({ cursor: cursorURL.interactiveCursorURL}).on(
            EventsTouchedGameObjectsStrings.POINTEROUT,
            () => {
                this.viewIconsTableText.setColor(ColorsString.GREEN_HEXADECIMAL_STRING);
                if (this.iconsTable.visible) {
                    this.viewIconsTableText.setColor(ColorsString.RED_HEXADECIMAL_STRING);
                }
            }
        );

        this.viewIconsTableText.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN,
            () => {
                // console.log(this.iconsTable.visible);
                if (this.iconsTable.visible) {
                    this.viewIconsTableText.setText('VER LEYENDAS >');
                    this.viewIconsTableText.setColor(ColorsString.GREEN_HEXADECIMAL_STRING);
                    this.iconsTable.setVisible(false);
                } else {
                    this.viewIconsTableText.setColor(ColorsString.RED_HEXADECIMAL_STRING);
                    this.viewIconsTableText.setText('< OCULTAR LEYENDAS');
                    this.iconsTable.setVisible(true);
                }
            }
        );

        this.events.on(
            'wake',
            () => {
                GameSpecifications.gameOver = (!(GameSpecifications.decisionPeriodIds.length > 0)  && gameStatus.status === 'game-over');
                this.updateSceneScore();
                this.showIconDecision();
                this.updateGameOverState();
            }
        );

        this.playButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                if (GameSpecifications.decisionPeriodIds.length > 0) {
                    this.scene.pause();
                    const gameData: SceneDataInterface = {
                        returnSceneName: this.scene.key
                    }
                    // this.scene.launch(GameSceneIdsStrings.END_SCENE_ID, gameData);
                    this.scene.launch(GameSceneIdsStrings.DECISION_MAKING_SCENE_ID, gameData);
                }
                // if (GameSpecifications.gameOver) {
                //     this.scene.pause();
                //     this.scene.launch(GameSceneIdsStrings.END_SCENE_ID);
                // }

                const playButtonText = this.playButton.getByName(
                    buttonElements.BUTTON_TEXT
                ) as Phaser.GameObjects.Text;
                // playButtonText.setText('RESULTADOS');
                if (playButtonText.text === 'RESULTADOS') {
                    this.scene.pause();
                    this.scene.launch(GameSceneIdsStrings.END_SCENE_ID);
                }
            }
        );

        this.homeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.WARNING_MESSAGE_SCENE_ID, gameData);
            }
        );
    }


    private updateSceneScore() {
        if (this.totalScore !== undefined) {
            this.totalScore.setText('PUNTAJE: ' + gameData.playerData.score);
        }
    }

    private updateGameOverState() {
        if (GameSpecifications.gameOver) {
            const playButtonText = this.playButton.getByName(
                buttonElements.BUTTON_TEXT
            ) as Phaser.GameObjects.Text;
            playButtonText.setText('RESULTADOS');
        }
    }
    

    private showIconDecision() {
        if (GameSpecifications.currentDecisionsPeriod != null) {
            for (let decisionId in GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions) {
                for (let decisionOptionId in GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions[decisionId].decision_options) {
                    const decisionOptionWasSelected = GameSpecifications.gameDecisionsData[GameSpecifications.currentDecisionsPeriod.id].decisions[decisionId].decision_options[decisionOptionId].decision_option_was_selected;
                    if (decisionOptionWasSelected && decisionOptionId in _gameObjectIconsMap) {
                        // this.mapsIcons[decisionOptionId].gameObject.setVisible(true);
                        this.gameObjects.get( 
                            _gameObjectIconsMap[decisionOptionId].gameObjectName
                        ).gameObject.setVisible(true);
                    }
                }
            }
        }
    }

}
