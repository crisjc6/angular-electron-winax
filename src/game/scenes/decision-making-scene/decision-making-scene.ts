import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { decisionMakingSceneElementsSpecifications } from "./decision-making-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { buttonElements, DecisionSceneElementsString, GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { gameRouterLink, GameSpecifications, gameStatus, playerData } from "../../settings/game-system-specifications";
import { HtmlDOMComponent } from "../../components/html-dom-component/html-dom-component";
import { DecisionBoxComponent } from "../../components/decision-box-component/decision-box-component";
import { DecisionInterface, DecisionOptionInterface, GameDecisionInterface } from "../../interfaces/game-decision-interface";
import { getGameData } from "../../functions/game-decision-data-functions/game-decision-data-functions";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import winax from "winax";

export class DecisionMakingScene extends Phaser.Scene {

    private gameFacade: GameFacade;
    private sceneGameObjects;
    private sceneData: SceneDataInterface;
    private decisionNumber: number;
    private currentDecision: DecisionInterface;

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
        this.getDecisionPeriod();
        this.getDecision();
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
                if (this.decisionNumber === 1) {
                    GameSpecifications.currentDecisionIndex = 1;
                    this.decisionNumber = 2;
                    this.getDecision();
                    this.updateDataDecision();
                } else {
                    // GameSpecifications.currentPeriodIndex++;
                    this.loadWeapValue();
                    GameSpecifications.currentDecisionIndex = 0;
                    // this.getDecisionPeriod();
                    this.scene.stop(this.scene.key);
                    this.scene.wake(this.sceneData.returnSceneName);
                }
                // getGameData();
                this.backButton.setVisible(true);
                this.continueButton.setX(this.continueButtonSpecification.scale.objectPositionX);
                // this.nextDecision();
            }
        );

        // // addPointerOverOnInteractiveObject(this.saveSettingsButtons);
        this.backButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                GameSpecifications.currentDecisionIndex = 0;
                this.decisionNumber = 1;
                this.continueButton.setX(this.sceneBackground.x);                
                this.backButton.setVisible(false);
                // getGameData();
                this.getDecision();
                this.updateDataDecision();
            }
        );
        
        this.selectedDecision(this.decisionOption1);
        this.selectedDecision(this.decisionOption2);
        this.selectedDecision(this.decisionOption3);
        
        this.disableButton(this.continueButton);
    }

    private loadWeapValue() {
        const WEAP = new winax.Object("WEAP.WEAPApplication");
        WEAP.ActiveArea = "Tesis_IR_6";
        WEAP.ActiveScenario = "Escenarios_juego";
        
        WEAP.ExportResults("C:\\CSV\\datos_game.csv");
        // WEAP.BranchVariable("\\Key\\Kc\\Agricola").Expression = 1.5;
        // WEAP.ExportResults("C:\\CSV\\datos_game2.csv");

        for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
            for(let decisionOptionId in GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options) {
                const decisionOptionWeapVariable = GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options[decisionOptionId].decision_option_weap_variable;
                const decisionOptionValue = GameSpecifications.currentDecisionsPeriod.decisions[decisionId].decision_options[decisionOptionId].decision_option_value;
                // console.log(decisionOptionWeapVariable + ' = ' + decisionOptionValue);
                WEAP.BranchVariable(decisionOptionWeapVariable).Expression = decisionOptionValue;
            }
        }
        WEAP.ExportResults("C:\\CSV\\datos_game2.csv");
    }

    private getDecisionPeriod() {
        // GameSpecifications.currentDecisionId = GameSpecifications.decisionIds[GameSpecifications.currentDecisionIndex];
        // this.currentDecision = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]));

        // GameSpecifications.currentPeriodId = GameSpecifications.decisionPeriodIds[GameSpecifications.currentPeriodIndex];
        GameSpecifications.currentPeriodId = GameSpecifications.decisionPeriodIds.pop();

        GameSpecifications.currentDecisionsPeriod = JSON.parse(JSON.stringify(GameSpecifications.gameDecisionsData[GameSpecifications.currentPeriodId]));
        GameSpecifications.decisionIds = [];
        for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
            GameSpecifications.decisionIds.push(decisionId);
        }
        // console.log('Periodo ID: ' + GameSpecifications.currentPeriodId);
        // console.log('Periodo: ' );
        // console.log(GameSpecifications.currentDecisionsPeriod);
        // console.log('Decision: ' );
        // console.log(GameSpecifications.currentDecisionsPeriod.decisions);
    }

    private getDecision() {
        GameSpecifications.currentDecisionId = GameSpecifications.decisionIds[GameSpecifications.currentDecisionIndex];
        
        // console.log('Decicion ID: ' + GameSpecifications.currentDecisionId);
        // console.log('Current Decision: ' );
        // console.log(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]);
        this.currentDecision = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]));
        
    }

    private updateDecisionData(selectedOtionId: string) {
        // const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(GameSpecifications.currentDecision.decision_options));
        const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(this.currentDecision.decision_options));
        
        for(let optionId in decisionOptions) {
            GameSpecifications.currentDecisionsPeriod
                .decisions[
                    GameSpecifications.currentDecisionId
                ].decision_options[
                    optionId
                ].decision_option_value = 0;
        }
        
        GameSpecifications.currentDecisionsPeriod
            .decisions[
                GameSpecifications.currentDecisionId
            ].decision_options[
                selectedOtionId
            ].decision_option_value = 1;
    }

    private selectedDecision(decisionOption: DecisionBoxComponent){
        decisionOption.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN,
            () => {
                this.updateDecisionData(decisionOption.getData('optionId'));
                this.enableButton(this.continueButton);
                this.clearSelectedOption();
                decisionOption.updateToSelectedCheckBox();
            }
        );
    }

    private updateDataDecision() {
        this.clearSelectedOption();
        this.decisiontitle.setText('DECISIÓN N° ' + this.decisionNumber);
        this.decisionText.setText(this.currentDecision.decision_text);
        
        const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(this.currentDecision.decision_options));
        const optionIds: string[] = [];
        for(let optionId in decisionOptions) {
            optionIds.push(optionId);
        }
        
        this.updateDecisionOption(
            optionIds[0],
            this.decisionOption1,
            decisionOptions[optionIds[0]].decision_option_text
        );

        this.updateDecisionOption(
            optionIds[1],
            this.decisionOption2,
            decisionOptions[optionIds[1]].decision_option_text
        );

        this.updateDecisionOption(
            optionIds[2],
            this.decisionOption3,
            decisionOptions[optionIds[2]].decision_option_text
        );

        // this.decisionOption1.updateOption(
        //     decisionOptions[optionIds[0]].decision_option_id,
        //     decisionOptions[optionIds[0]].decision_option_text
        // );
        // this.decisionOption2.updateOption(
        //     decisionOptions[optionIds[1]].decision_option_id,
        //     decisionOptions[optionIds[1]].decision_option_text
        // );
        // this.decisionOption3.updateOption(
        //     decisionOptions[optionIds[2]].decision_option_id,
        //     decisionOptions[optionIds[2]].decision_option_text
        // );

        // if (
        //     // decisionOptions[optionIds[0]].decision_option_value === 1
        //     GameSpecifications.currentDecisionsPeriod
        //     .decisions[
        //         GameSpecifications.currentDecisionId
        //     ].decision_options[
        //         decisionOptions[optionIds[0]].decision_option_id
        //     ].decision_option_value
        // ) {
        //     this.decisionOption1.updateToSelectedCheckBox();
        // }

        // if (decisionOptions[optionIds[1]].decision_option_value === 1) {
        //     this.decisionOption2.updateToSelectedCheckBox();
        // }

        // if (decisionOptions[optionIds[2]].decision_option_value === 1) {
        //     this.decisionOption2.updateToSelectedCheckBox();
        // }
    }

    private updateDecisionOption(optionId: string, decisionOption: DecisionBoxComponent, decisionOptionText: string) {
        
        decisionOption.updateOption(
            optionId,
            decisionOptionText
        );
        
        if (
            // decisionOptions[optionIds[0]].decision_option_value === 1
            GameSpecifications.currentDecisionsPeriod
            .decisions[
                GameSpecifications.currentDecisionId
            ].decision_options[
                optionId
            ].decision_option_value === 1
        ) {
            this.decisionOption1.updateToSelectedCheckBox();
        }

    }

    private clearSelectedOption() {
        this.decisionOption1.updateToBlankCheckBox();
        this.decisionOption2.updateToBlankCheckBox();
        this.decisionOption3.updateToBlankCheckBox();
    }
    
    private disableButton(gameObjectButton: ButtonComponent) {
        gameObjectButton.disableInteractive();
        const buttonText = gameObjectButton.getByName(buttonElements.BUTTON_TEXT) as Phaser.GameObjects.Text;
        const buttonBackground = gameObjectButton.getByName(buttonElements.BUTTON_BACKGROUND) as Phaser.GameObjects.Image;
        
        buttonBackground.setTint(ColorsValue.LIGHT_GRAY_HEXADECIMAL_VALUE);
        buttonText.setTint(ColorsValue.LIGHT_GRAY_HEXADECIMAL_VALUE);
        
        buttonBackground.setAlpha(0.95);

    }

    private enableButton(gameObjectButton: ButtonComponent) {
        const buttonText = gameObjectButton.getByName(buttonElements.BUTTON_TEXT) as Phaser.GameObjects.Text;
        const buttonBackground = gameObjectButton.getByName(buttonElements.BUTTON_BACKGROUND) as Phaser.GameObjects.Image;
        buttonText.clearTint();
        buttonBackground.clearTint();
        buttonBackground.clearAlpha();
        gameObjectButton.setInteractive();
    }
}