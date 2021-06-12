import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { decisionMakingSceneElementsSpecifications } from "./decision-making-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { DecisionSceneElementsString, GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameRouterLink, GameSpecifications, gameStatus, playerData } from "../../settings/game-system-specifications";
import { HtmlDOMComponent } from "../../components/html-dom-component/html-dom-component";
import { DecisionBoxComponent } from "../../components/decision-box-component/decision-box-component";
import { DecisionInterface, DecisionOptionInterface, GameDecisionInterface } from "../../interfaces/game-decision-interface";
import { getGameData } from "../../functions/game-decision-data-functions/game-decision-data-functions";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
// import { GameDecisions } from "../../settings/game-decisions";

export class DecisionMakingScene extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;
    private sceneData: SceneDataInterface;
    private decisionNumber: number;

    private sceneBackground: Phaser.GameObjects.Image;
    private closeButton: ButtonComponent;
    private continueButton: ButtonComponent;
    private continueButtonSpecification: GameElementSpecificationsInterface;
    private backButton: ButtonComponent;

    private decisiontitle: Phaser.GameObjects.Text;
    private decisionText: Phaser.GameObjects.Text;
    private decisionImage: Phaser.GameObjects.Image;
    private decisionOption1: DecisionBoxComponent;
    private decisionOption2: DecisionBoxComponent;
    private decisionOption3: DecisionBoxComponent;
    

    init(sceneData: SceneDataInterface) {
        this.sceneData = sceneData;
        this.decisionNumber = 1;
        GameSpecifications.currentDecisionIndex = 0;
    }

    constructor() {
        super({
            key: GameSceneIdsStrings.DECISION_MAKING_SCENE_ID
        });
        this.sceneGameObjects = new Map();
    }

    create() {
        this.generateScene();
        this.getElements();
        this.addFunctionality();
        this.updateDataDecision();
    }

    private generateScene() {
        this.gameFacade = new GameFacade(this, decisionMakingSceneElementsSpecifications);
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

        
        this.decisiontitle = this.sceneGameObjects.get(
            DecisionSceneElementsString.DECISION_TITLE
        ).gameObject;
        
        this.decisionText = this.sceneGameObjects.get(
            DecisionSceneElementsString.DECISION_TEXT
        ).gameObject;
        
        this.decisionOption1 = this.sceneGameObjects.get(
            DecisionSceneElementsString.DECISION_OPTION_1
        ).gameObject;
        
        this.decisionOption2 = this.sceneGameObjects.get(
            DecisionSceneElementsString.DECISION_OPTION_2
        ).gameObject;
        
        this.decisionOption3 = this.sceneGameObjects.get(
            DecisionSceneElementsString.DECISION_OPTION_3
        ).gameObject;

        this.backButton = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_BACK_BUTTON
        ).gameObject;
        this.backButton.setVisible(false);

        this.continueButton = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_CONTINUE_BUTTON
        ).gameObject;
        this.continueButton.setX(this.sceneBackground.x);

        this.continueButtonSpecification = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_CONTINUE_BUTTON
        ).gameElementSpecification;

    }

    private addFunctionality() {
        // addTintOnGameButton(this.closeButton);
        this.closeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                this.scene.stop(this.scene.key);
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );


        // // addPointerOverOnInteractiveObject(this.saveSettingsButtons);
        this.continueButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                GameSpecifications.currentDecisionIndex = 1;
                this.decisionNumber = 2;
                getGameData();
                this.backButton.setVisible(true);
                this.continueButton.setX(this.continueButtonSpecification.scale.objectPositionX);
                this.updateDataDecision();
            }
        );

        // // addPointerOverOnInteractiveObject(this.saveSettingsButtons);
        this.backButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                GameSpecifications.currentDecisionIndex = 0;
                this.decisionNumber = 1;
                this.continueButton.setX(this.sceneBackground.x);                
                this.backButton.setVisible(false);
                getGameData();
                this.updateDataDecision();
            }
        );
        
        this.selectedDecision(this.decisionOption1);
        this.selectedDecision(this.decisionOption2);
        this.selectedDecision(this.decisionOption3);

    }

    private updateDecisionData(idOption: string) {
        const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(GameSpecifications.currentDecision.decision_options));
        const optionIds: string[] = [];
        for(let optionId in decisionOptions) {
            optionIds.push(optionId);
        }

        console.log(idOption);

        console.log(
            GameSpecifications.currentDecisionsPeriod[
                GameSpecifications.currentPeriodId
            ].decisions[
                GameSpecifications.currentDecisionId
            ].decision_options
        );
    }

    private selectedDecision(decisionOption: DecisionBoxComponent){
        decisionOption.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN,
            () => {
                // this.setData('optionId',
                this.updateDecisionData(decisionOption.getData('optionId'));
                this.clearSelectedOption();
                decisionOption.updateToSelectedCheckBox();
            }
        );
    }

    private updateDataDecision() {
        this.clearSelectedOption();
        this.decisiontitle.setText('DECISIÓN N° ' + this.decisionNumber);
        this.decisionText.setText(GameSpecifications.currentDecision.decision_text);
        const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(GameSpecifications.currentDecision.decision_options));
        const optionIds: string[] = [];
        for(let optionId in decisionOptions) {
            optionIds.push(optionId);
        }
        this.decisionOption1.updateOption(decisionOptions[optionIds[0]].decision_option_id, decisionOptions[optionIds[0]].decision_option_text);
        this.decisionOption2.updateOption(decisionOptions[optionIds[1]].decision_option_id, decisionOptions[optionIds[1]].decision_option_text);
        this.decisionOption3.updateOption(decisionOptions[optionIds[2]].decision_option_id, decisionOptions[optionIds[2]].decision_option_text);
    }

    private clearSelectedOption() {
        this.decisionOption1.updateToBlankCheckBox();
        this.decisionOption2.updateToBlankCheckBox();
        this.decisionOption3.updateToBlankCheckBox();
    }

}