import { GameFacade } from "../facade-scene/facade-scene";
import { SceneDataInterface } from "../../interfaces/scene-data-interface";
import { decisionMakingSceneElementsSpecifications } from "./decision-making-scene-specifications";
import { GameSceneIdsStrings } from "../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { buttonElements, DecisionSceneElementsString, GameSceneElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ColorsValue } from "../../settings/game-constants-strings/text-styles-string";
import { GameSpecifications } from "../../settings/game-system-specifications";
import { DecisionBoxComponent } from "../../components/decision-box-component/decision-box-component";
import { DecisionInterface, DecisionOptionInterface } from "../../interfaces/game-decision-interface";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";

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

    private hideButton: ButtonComponent;
    private isSceneHide =  false;

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
        this.isSceneHide = false;
        this.generateScene();
        this.getElements();
        this.addFunctionality();
        this.updateSceneDataDecision();
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
        ).gameObject as Phaser.GameObjects.Text;
        this.decisiontitle.setAlpha(0.9);

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

        this.hideButton = this.sceneGameObjects.get(
            GameSceneElementsString.SCENE_HIDE_BUTTON
        ).gameObject;

        // this.mapImage = this.sceneGameObjects.get(
        //     GameSceneElementsString.SCENE_MAP_DECISION_BACKGROUND
        // ).gameObject as Phaser.GameObjects.Image;
        // this.mapImage.setVisible(false);

    }

    private addFunctionality() {
        this.closeButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                GameSpecifications.decisionPeriodIds.push(GameSpecifications.currentPeriodId);
                this.scene.stop(this.scene.key);
                this.scene.wake(this.sceneData.returnSceneName);
            }
        );

        this.continueButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                if (this.decisionNumber === 1) {
                    GameSpecifications.currentDecisionIndex = 1;
                    this.decisionNumber = 2;
                    this.updateSceneDataDecision();
                    this.disableButton(this.continueButton);
                } else {
                    GameSpecifications.currentDecisionIndex = 0;

                    this.scene.stop(this.scene.key);

                    const gameData: SceneDataInterface = {
                        returnSceneName: this.sceneData.returnSceneName
                    }
                    this.scene.start(GameSceneIdsStrings.LOAD_SCENE_ID, gameData);
                }
                
                this.backButton.setVisible(true);
                this.continueButton.setX(this.continueButtonSpecification.scale.objectPositionX);

                this.clearSelectedOption();
            }
        );

        this.backButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                GameSpecifications.currentDecisionIndex = 0;
                this.decisionNumber = 1;
                this.continueButton.setX(this.sceneBackground.x);                
                this.backButton.setVisible(false);
                this.updateSceneDataDecision();
            }
        );
        
        this.selectedDecision(this.decisionOption1);
        this.selectedDecision(this.decisionOption2);
        this.selectedDecision(this.decisionOption3);
        
        this.disableButton(this.continueButton);

        this.hideButton.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN,
            () => {
                // console.log(this.iconsTable.visible);
                if (this.isSceneHide) {
                    // this.hideButton.setText('VER MAPA');
                    // this.hideButton.setColor(ColorsString.GREEN_HEXADECIMAL_STRING);
                    // this.mapImage.setVisible(false);
                    this.showAllScene();
                } else {
                    // this.hideButton.setColor(ColorsString.RED_HEXADECIMAL_STRING);
                    // this.hideButton.setText('OCULTAR MAPA');
                    // this.mapImage.setVisible(true);
                    this.hideAllScene();
                }
            }
        );

    }

    private getDecisionPeriod() {
        GameSpecifications.currentPeriodId = GameSpecifications.decisionPeriodIds.pop();
        GameSpecifications.currentDecisionsPeriod = JSON.parse(JSON.stringify(GameSpecifications.gameDecisionsData[GameSpecifications.currentPeriodId]));
        GameSpecifications.decisionIds = [];
        
        for(let decisionId in GameSpecifications.currentDecisionsPeriod.decisions) {
            GameSpecifications.decisionIds.push(decisionId);
        }
    }

    private getDecision() {
        GameSpecifications.currentDecisionId = GameSpecifications.decisionIds[GameSpecifications.currentDecisionIndex];
        this.currentDecision = JSON.parse(JSON.stringify(GameSpecifications.currentDecisionsPeriod.decisions[GameSpecifications.currentDecisionId]));
    }

    private updateDecisionData(selectedOtionId: string) {
        const decisionOptions: DecisionOptionInterface[] = JSON.parse(JSON.stringify(this.currentDecision.decision_options));
        
        for(let optionId in decisionOptions) {
            GameSpecifications.gameDecisionsData[
                GameSpecifications.currentDecisionsPeriod.id
            ].decisions[
                GameSpecifications.currentDecisionId
            ].decision_options[
                optionId
            ].decision_option_was_selected = false;
        }
        
        GameSpecifications.gameDecisionsData[
            GameSpecifications.currentDecisionsPeriod.id
        ].decisions[
            GameSpecifications.currentDecisionId
        ].decision_options[
            selectedOtionId
        ].decision_option_was_selected = true;
    }

    private selectedDecision(decisionOption: DecisionBoxComponent){
        decisionOption.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN,
            () => {
                this.clearSelectedOption();
                this.updateDecisionData(decisionOption.getData('optionId'));
                this.enableButton(this.continueButton);
                decisionOption.updateToSelectedCheckBox();
            }
        );
    }

    private updateSceneDataDecision() {
        this.getDecision();
        const currentPeriod = GameSpecifications.currentDecisionsPeriod;
        this.decisiontitle.setText('PERIODO ' + currentPeriod.year_start + ' - ' + currentPeriod.year_end +' DECISIÓN N° ' + this.decisionNumber );
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
    }

    private updateDecisionOption(optionId: string, decisionOption: DecisionBoxComponent, decisionOptionText: string) {
        decisionOption.updateOption(
            optionId,
            decisionOptionText,
            GameSpecifications.currentDecisionsPeriod
                    .decisions[
                        GameSpecifications.currentDecisionId
                    ].decision_options[
                        optionId
                    ].decision_option_was_selected
        );
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

    private hideAllScene() {
        this.isSceneHide = true;
        this.sceneGameObjects.forEach(
            (values, keys) => {
                
                if (
                    keys === GameSceneElementsString.SCENE_CLOSE_BUTTON ||
                    keys === GameSceneElementsString.SCENE_BACKGROUND
                ) {
                    if (keys === GameSceneElementsString.SCENE_BACKGROUND) {
                        values.gameObject.setY(-170);
                    }
                    values.gameObject.setVisible(true);
                } else {
                    values.gameObject.setVisible(false);
                }
                
                if (keys === GameSceneElementsString.SCENE_HIDE_BUTTON ) {
                    const hideButtonText = values.gameObject.getByName(
                        buttonElements.BUTTON_TEXT
                    ) as Phaser.GameObjects.Text;
                    hideButtonText.setText('REGREZAR');
                    values.gameObject.setVisible(true);
                }
            }
        );
    }

    private showAllScene() {
        this.isSceneHide = false;
        this.sceneGameObjects.forEach(
            (values, keys) => {
                if (keys === GameSceneElementsString.SCENE_BACKGROUND) {
                    values.gameObject.setY(315);
                }

                values.gameObject.setVisible(true);

                if (
                    keys === GameSceneElementsString.SCENE_BACK_BUTTON &&
                    this.continueButton.x === this.sceneBackground.x
                ) {
                    this.backButton.setVisible(false);
                }
                
                if (keys === GameSceneElementsString.SCENE_HIDE_BUTTON ) {
                    const hideButtonText = values.gameObject.getByName(
                        buttonElements.BUTTON_TEXT
                    ) as Phaser.GameObjects.Text;
                    hideButtonText.setText('MAPA');
                    values.gameObject.setVisible(true);
                }
            }
        );
    }
}