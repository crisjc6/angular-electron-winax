import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";

export function generateGameObjectText(
    _scene: Phaser.Scene,
    _textSpecifications: GameElementSpecificationsInterface
): Phaser.GameObjects.Text {

    const gameObjectText = new Phaser.GameObjects.Text(
        _scene,
        _textSpecifications.scale.objectPositionX,
        _textSpecifications.scale.objectPositionY,
        _textSpecifications.content,
        _textSpecifications.style
    );

    gameObjectText.setWordWrapWidth(_textSpecifications.scale.objectWidth);
    
    gameObjectText.setOrigin(
        _textSpecifications.originX,
        _textSpecifications.originY
    );
    
    return gameObjectText;
}