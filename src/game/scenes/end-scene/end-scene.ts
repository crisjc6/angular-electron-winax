import { GameFacade } from "../facade-scene/facade-scene";
import { endSceneElementsSpecifications } from "./end-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { GameSceneElementsString, TypeResultsElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameRouterLink, gameStatus } from "../../settings/game-system-specifications";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { gameData } from "../../settings/game-data/game-data";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";

export class EndScene extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;

    private sceneBackground: Phaser.GameObjects.Image;
    private quitButton: ButtonComponent;
    // private returnButton: ButtonComponent;
    private totalScoreText: Phaser.GameObjects.Text;

    private acus_20_30_text: Phaser.GameObjects.Text;
    private acus_30_40_text: Phaser.GameObjects.Text;
    private acus_40_50_text: Phaser.GameObjects.Text;
    private hydroelectric_20_30_text: Phaser.GameObjects.Text;
    private hydroelectric_30_40_text: Phaser.GameObjects.Text;
    private hydroelectric_40_50_text: Phaser.GameObjects.Text;
    private coverage_20_30_text: Phaser.GameObjects.Text;
    private coverage_30_40_text: Phaser.GameObjects.Text;
    private coverage_40_50_text: Phaser.GameObjects.Text;
    private riverHealth_20_30_text: Phaser.GameObjects.Text;
    private riverHealth_30_40_text: Phaser.GameObjects.Text;
    private riverHealth_40_50_text: Phaser.GameObjects.Text;

    init() {
        
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
        this.updateDataScene();
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


        // this.returnButton = this.sceneGameObjects.get(
        //     GameSceneElementsString.SCENE_RETURN_BUTTON
        // ).gameObject;

        this.totalScoreText = this.sceneGameObjects.get(
            TypeResultsElementsString.TOTAL_SCORE_TEXT
        ).gameObject;

        this.acus_20_30_text = this.sceneGameObjects.get(
            TypeResultsElementsString.ACUS_20_30_TEXT
        ).gameObject;

        this.acus_30_40_text = this.sceneGameObjects.get(
            TypeResultsElementsString.ACUS_30_40_TEXT
        ).gameObject;

        this.acus_40_50_text = this.sceneGameObjects.get(
            TypeResultsElementsString.ACUS_40_50_TEXT
        ).gameObject;

        this.hydroelectric_20_30_text = this.sceneGameObjects.get(
            TypeResultsElementsString.HYDROELECTRIC_20_30_TEXT
        ).gameObject;

        this.hydroelectric_30_40_text = this.sceneGameObjects.get(
            TypeResultsElementsString.HYDROELECTRIC_30_40_TEXT
        ).gameObject;

        this.hydroelectric_40_50_text = this.sceneGameObjects.get(
            TypeResultsElementsString.HYDROELECTRIC_40_50_TEXT
        ).gameObject;

        this.coverage_20_30_text = this.sceneGameObjects.get(
            TypeResultsElementsString.COVERAGE_20_30_TEXT
        ).gameObject;

        this.coverage_30_40_text = this.sceneGameObjects.get(
            TypeResultsElementsString.COVERAGE_30_40_TEXT
        ).gameObject;

        this.coverage_40_50_text = this.sceneGameObjects.get(
            TypeResultsElementsString.COVERAGE_40_50_TEXT
        ).gameObject;

        this.riverHealth_20_30_text = this.sceneGameObjects.get(
            TypeResultsElementsString.RIVER_HEALTH_20_30_TEXT
        ).gameObject;

        this.riverHealth_30_40_text = this.sceneGameObjects.get(
          TypeResultsElementsString.RIVER_HEALTH_30_40_TEXT
      ).gameObject;

      this.riverHealth_40_50_text = this.sceneGameObjects.get(
          TypeResultsElementsString.RIVER_HEALTH_40_50_TEXT
      ).gameObject;

    }

    private addFunctionality() {
        // addTintOnGameButton(this.closeButton);
        this.quitButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.pause();
                const gameData: SceneDataInterface = {
                    returnSceneName: this.scene.key
                }
                this.scene.launch(GameSceneIdsStrings.WARNING_MESSAGE_SCENE_ID, gameData);
                // gameStatus.status = 'mainScene';
                // this.scene.stop(this.scene.key);
                // gameRouterLink.routerLink.navigate(['/']);
            }
        );

        // this.returnButton.setInteractive().on(
        //     EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
        //         this.scene.stop();
        //         this.scene.wake(GameSceneIdsStrings.MAP_SCENE_ID);
        //         // gameStatus.status = 'mainScene';
        //         // this.scene.stop(this.scene.key);
        //         // gameRouterLink.routerLink.navigate(['/']);
        //     }
        // );
        
    }

    private updateDataScene() {
        this.totalScoreText.setText('PUNTAJE TOTAL: ' + gameData.gameScores.totalScore + '/120');
        
        this.acus_20_30_text.setText(gameData.gameScores.conservationAreaScores.periodScores[0].score);

        this.acus_30_40_text.setText(gameData.gameScores.conservationAreaScores.periodScores[1].score);

        this.acus_40_50_text.setText(gameData.gameScores.conservationAreaScores.periodScores[2].score);

        this.hydroelectric_20_30_text.setText(gameData.gameScores.hydroelectricTurbineScores.periodScores[0].score);

        this.hydroelectric_30_40_text.setText(gameData.gameScores.hydroelectricTurbineScores.periodScores[1].score);

        this.hydroelectric_40_50_text.setText(gameData.gameScores.hydroelectricTurbineScores.periodScores[2].score);

        this.coverage_20_30_text.setText(gameData.gameScores.demandSiteScores.periodScores[0].score);

        this.coverage_30_40_text.setText(gameData.gameScores.demandSiteScores.periodScores[1].score);

        this.coverage_40_50_text.setText(gameData.gameScores.demandSiteScores.periodScores[2].score);

        this.riverHealth_20_30_text.setText(gameData.gameScores.helpcareRiverScores.periodScores[0].score);

        this.riverHealth_30_40_text.setText(gameData.gameScores.helpcareRiverScores.periodScores[1].score);

        this.riverHealth_40_50_text.setText(gameData.gameScores.helpcareRiverScores.periodScores[2].score);
    }
}
