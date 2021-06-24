import { generateGameObjectImage } from "../../functions/image-functions/image-functions";
import { generateGameObjectText } from "../../functions/text-functions/text-functions";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
// @ts-ignore
import { containerTextElements } from "../../settings/game-constants-strings/game-elements-strings";
import { GameSpecifications } from "../../settings/game-system-specifications";

export class TextCardComponent extends Phaser.GameObjects.Container {

    public scene: Phaser.Scene;
    private textCardSpecifications: GameElementSpecificationsInterface;
    private textBackground: Phaser.GameObjects.Image;
    private text: Phaser.GameObjects.Text;

    constructor(_scene: Phaser.Scene, _textCardElement: GameElementSpecificationsInterface) {
        super(_scene, _textCardElement.scale.objectPositionX, _textCardElement.scale.objectPositionY);
        this.scene = _scene;
        this.textCardSpecifications = _textCardElement;
        this.generateButton();
    }

    private generateButton() {
        this.textBackground = generateGameObjectImage(this.scene, this.textCardSpecifications);
        this.textBackground.setName(containerTextElements.CONTAINER_TEXT_BACKGROUND);
        this.textBackground.setPosition(0, 0);
        this.textBackground.setDisplaySize(this.textCardSpecifications.scale.objectWidth, this.textCardSpecifications.scale.objectHeight);

        const buttonTextSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(this.textCardSpecifications));
        // buttonTextSpecifications.scale.objectHeight = parseInt(buttonTextSpecifications.style.fontSize) * 1.9;
        buttonTextSpecifications.scale.objectHeight = this.textCardSpecifications.scale.objectHeight * 0.95;
        buttonTextSpecifications.scale.objectWidth = this.textCardSpecifications.scale.objectWidth * 0.95;
        this.text = generateGameObjectText(this.scene, buttonTextSpecifications);
        this.text.setName(containerTextElements.CONTAINER_TEXT);
        this.text.setPosition(this.textBackground.displayWidth/2, (-(this.textBackground.displayHeight / 2)) + 24);
        this.text. setOrigin(0.5, 0);

        this.add([this.textBackground, this.text]);
        this.setSize(this.textCardSpecifications.scale.objectWidth, this.textCardSpecifications.scale.objectHeight );
    }
    
    public updateData() {
        let contentTextCard = '';

        for (let periodId in GameSpecifications.gameDecisionsData) {
            contentTextCard += 'PERÍODO ' +
                                GameSpecifications.gameDecisionsData[periodId].year_start 
                                + ' - ' +
                                GameSpecifications.gameDecisionsData[periodId].year_end
                                + '\n';
            let decisionNumber = 0;

            for (let decisionId in GameSpecifications.gameDecisionsData[periodId].decisions) {
                decisionNumber++;
                contentTextCard += 'Decisión ' + decisionNumber + ' : ';
                let decicionOptionNumber = 0;
                let decicionSelectedNumber = 0;

                for (let decisionOptionId in GameSpecifications.gameDecisionsData[periodId].decisions[decisionId].decision_options) {
                    decicionOptionNumber++;
                    const decisionOptionWasSelected = GameSpecifications.gameDecisionsData[periodId].decisions[decisionId].decision_options[decisionOptionId].decision_option_was_selected;
                    if (decisionOptionWasSelected) {
                        decicionSelectedNumber = decicionOptionNumber;
                    }
                }
                contentTextCard += ( decicionSelectedNumber > 0 ? 'Opción ' + decicionSelectedNumber + '\n' : 'Ninguna\n')
                // contentTextCard += 'OPCION ' +  ;
            }
            contentTextCard += '\n'
        }
        this.text.setText(contentTextCard);
    }
}
