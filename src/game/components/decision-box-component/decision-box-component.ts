import { changeGameObjectImage, generateGameObjectImage } from "../../functions/image-functions/image-functions";
import { generateGameObjectText } from "../../functions/text-functions/text-functions";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
// @ts-ignore
import { boxDecisionElements, buttonElements, GameElementsString, IconsKeyStrings } from "../../settings/game-constants-strings/game-elements-strings";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";

export class DecisionBoxComponent extends Phaser.GameObjects.Container {

    public scene: Phaser.Scene;
    private decisionBoxSpecifications: GameElementSpecificationsInterface;
    private boxBackground: Phaser.GameObjects.Image;
    private checkBoxBackground: Phaser.GameObjects.Image;
    private decisionText: Phaser.GameObjects.Text;
    private decisionSelected: boolean = false;

    constructor(_scene: Phaser.Scene, _decisionBoxSpecifications: GameElementSpecificationsInterface) {
        super(_scene, _decisionBoxSpecifications.scale.objectPositionX, _decisionBoxSpecifications.scale.objectPositionY);
        
        this.scene = _scene;
        this.decisionBoxSpecifications = _decisionBoxSpecifications;
        this.generateBox();
        // this.addFuncionality();
    }

    private generateBox() {
        this.boxBackground = generateGameObjectImage(this.scene, this.decisionBoxSpecifications);
        this.boxBackground.setName(boxDecisionElements.BOX_BACKGROUND);
        this.boxBackground.setPosition(0, 0);
        this.boxBackground.setDisplaySize(this.decisionBoxSpecifications.scale.objectWidth, this.decisionBoxSpecifications.scale.objectHeight);

        const checkBoxSpecifications: GameElementSpecificationsInterface = {
            type: GameElementsString.IMAGE_STRING,
            element: GameElementsString.IMAGE_STRING,
            assetName: IconsKeyStrings.BLANK_CHECK_ICON,
            name: boxDecisionElements.CHECKBOX_DECISION_BACKGROUND,
            scale: {
                objectWidthRatio: 1,
                objectHeightRatio: 1,
                objectWidth: this.decisionBoxSpecifications.scale.objectWidth * 0.09,
                objectHeight: this.decisionBoxSpecifications.scale.objectHeight * 0.70,
                objectPositionX: -this.decisionBoxSpecifications.scale.objectWidth * 0.50,
                objectPositionY: 0 
                ,
            }
        };
        this.checkBoxBackground = generateGameObjectImage(this.scene, checkBoxSpecifications);
        this.checkBoxBackground.setName(boxDecisionElements.BOX_BACKGROUND);

        const decisionTextSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(this.decisionBoxSpecifications));
        decisionTextSpecifications.scale.objectPositionX = -this.decisionBoxSpecifications.scale.objectWidth * 0.42;
        decisionTextSpecifications.scale.objectPositionY = 0;
        decisionTextSpecifications.originX = 0;
        decisionTextSpecifications.originY = 0.5;
        decisionTextSpecifications.scale.objectWidth = this.decisionBoxSpecifications.scale.objectWidth * 0.95;
        this.decisionText = generateGameObjectText(this.scene, decisionTextSpecifications);
        this.decisionText.setName(boxDecisionElements.DECISION_TEXT);
        // this.buttonText.setPosition(0, this.calculatePositionYofButtonText());

        this.add([this.boxBackground, this.checkBoxBackground, this.decisionText]);
        this.setSize(this.decisionBoxSpecifications.scale.objectWidth, this.decisionBoxSpecifications.scale.objectHeight );
    }

    // private addFuncionality() {
    //     this.setInteractive().on(
    //         EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
    //             // this.updateSelectedCheckBox(this.checkBoxBackground);
    //             // _gameObjectImage.texture.key === IconsKeyStrings.BLANK_CHECK_ICON ? IconsKeyStrings.CHECK_ICON : IconsKeyStrings.BLANK_CHECK_ICON,
    //             this.checkBoxBackground.texture.key === IconsKeyStrings.BLANK_CHECK_ICON ? this.updateToSelectedCheckBox() : this.updateToBlankCheckBox();
    //             // this.up
    //         }
    //     );
    // }

    public updateOption(optionId: string, optionText: string, wasSelected: boolean) {
        this.updateToBlankCheckBox();
        this.setData('optionId', optionId);
        this.decisionText.setText(optionText);
        if (wasSelected) {
            this.updateToSelectedCheckBox();
        } else {
            this.updateToBlankCheckBox();
        }
    }

    public updateToSelectedCheckBox() {
        changeGameObjectImage(
            this.checkBoxBackground,
            IconsKeyStrings.CHECK_ICON,
            // this.checkBoxBackground.texture.key === IconsKeyStrings.BLANK_CHECK_ICON ? IconsKeyStrings.CHECK_ICON : IconsKeyStrings.BLANK_CHECK_ICON,
            this.checkBoxBackground.displayWidth,
            this.checkBoxBackground.displayHeight
        );
        this.decisionSelected = true;
    }

    public updateToBlankCheckBox() {
        changeGameObjectImage(
            this.checkBoxBackground,
            IconsKeyStrings.BLANK_CHECK_ICON,
            this.checkBoxBackground.displayWidth,
            this.checkBoxBackground.displayHeight
        );
        
        this.decisionSelected = false;
    }

}
