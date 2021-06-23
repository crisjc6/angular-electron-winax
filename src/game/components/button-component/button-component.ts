import { generateGameObjectImage } from "../../functions/image-functions/image-functions";
import { generateGameObjectText } from "../../functions/text-functions/text-functions";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
// @ts-ignore
import { buttonElements, GameElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { EventsTouchedGameObjectsStrings } from "../../settings/game-constants-strings/game-events-strings";
import { cursorURL } from "../../settings/game-system-specifications";

export class ButtonComponent extends Phaser.GameObjects.Container {

    public scene: Phaser.Scene;
    private buttonSpecifications: GameElementSpecificationsInterface;
    private buttonBackground: Phaser.GameObjects.Image;
    private buttonText: Phaser.GameObjects.Text;

    constructor(_scene: Phaser.Scene, _buttonElement: GameElementSpecificationsInterface) {
        super(_scene, _buttonElement.scale.objectPositionX, _buttonElement.scale.objectPositionY);
        this.scene = _scene;
        this.buttonSpecifications = _buttonElement;
        this.generateButton();
        this.addPointerOverOnInteractiveObject();
    }

    private generateButton() {
        this.buttonBackground = generateGameObjectImage(this.scene, this.buttonSpecifications);
        this.buttonBackground.setName(buttonElements.BUTTON_BACKGROUND);
        this.buttonBackground.setPosition(0, 0);
        this.buttonBackground.setDisplaySize(this.buttonSpecifications.scale.objectWidth, this.buttonSpecifications.scale.objectHeight);

        const buttonTextSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(this.buttonSpecifications));
        buttonTextSpecifications.scale.objectHeight = parseInt(buttonTextSpecifications.style.fontSize) * 1.9;
        buttonTextSpecifications.scale.objectWidth = this.buttonSpecifications.scale.objectWidth * 0.95;
        this.buttonText = generateGameObjectText(this.scene, buttonTextSpecifications);
        this.buttonText.setName(buttonElements.BUTTON_TEXT);
        this.buttonText.setPosition(0, this.calculatePositionYofButtonText());

        this.add([this.buttonBackground, this.buttonText]);
        this.setSize(this.buttonSpecifications.scale.objectWidth, this.buttonSpecifications.scale.objectHeight );
    }

    private calculatePositionYofButtonText(): number {
        let verticalAlignment: number;

        const isSimpleButton = this.buttonSpecifications.element === GameElementsString.SIMPLE_BUTTON_STRING;
        const isButton = this.buttonSpecifications.element === GameElementsString.BUTTON_STRING;
        const isTopTitleButton = this.buttonSpecifications.element === GameElementsString.TOP_TITLE_BUTTON_STRING;
        const isBottomTitleButton = this.buttonSpecifications.element === GameElementsString.BOTTOM_TITLE_BUTTON_STRING;

        if (isSimpleButton) {
            verticalAlignment = -this.buttonSpecifications.scale.objectHeight * 0.1;
        }

        if (isButton) {
            verticalAlignment = 0;
        }

        if (isTopTitleButton) {
            verticalAlignment = -this.buttonSpecifications.scale.objectHeight / 2;
            this.buttonText.setOrigin(0.5, 0);
            this.buttonBackground.y += this.buttonText.height / 2;
            this.buttonBackground.setDisplaySize(this.buttonSpecifications.scale.objectWidth, this.buttonSpecifications.scale.objectHeight - this.buttonText.height);
        }

        if (isBottomTitleButton) {
            verticalAlignment = this.buttonSpecifications.scale.objectHeight * 0.51;
            this.buttonText.setOrigin(0.5, 1);
            this.buttonBackground.y -= this.buttonText.height / 2;
            this.buttonBackground.setDisplaySize(this.buttonSpecifications.scale.objectWidth, this.buttonSpecifications.scale.objectHeight - this.buttonText.height);
        }
        return verticalAlignment;
    }
    
    private addPointerOverOnInteractiveObject () {
        this.setInteractive({ cursor: cursorURL.interactiveCursorURL}).on(
            EventsTouchedGameObjectsStrings.POINTEROVER,
            () => {
                this.y += 7;
            }
        );

        this.setInteractive({ cursor: cursorURL.interactiveCursorURL}).on(
            EventsTouchedGameObjectsStrings.POINTEROUT,
            () => {
                this.y -= 7;
            }
        );
    }
}
