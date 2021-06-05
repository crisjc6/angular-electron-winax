import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";

export function generateGameObjectImage(
    _scene: Phaser.Scene,
    _imageSpecifications: GameElementSpecificationsInterface
): Phaser.GameObjects.Image {

    const gameObjectImage = new Phaser.GameObjects.Image(
        _scene,
        _imageSpecifications.scale.objectPositionX,
        _imageSpecifications.scale.objectPositionY,
        _imageSpecifications.assetName
    );

    gameObjectImage.setDisplaySize(
        _imageSpecifications.scale.objectWidth,
        _imageSpecifications.scale.objectHeight
    );

    gameObjectImage.setOrigin(
        _imageSpecifications.originX,
        _imageSpecifications.originY
    );
    // gameObjectImage.scale = 0.5;
    return gameObjectImage;
}

export function changeGameObjectImage(
    _gameObjectImage: Phaser.GameObjects.Image,
    _assetName: string,
    _objectWidth: number,
    _objectHeight: number
) { 

    if (_gameObjectImage.texture.key !== _assetName) {
        _gameObjectImage.setTexture(_assetName);
    }

    _gameObjectImage.displayWidth = _objectWidth;
    _gameObjectImage.displayHeight = _objectHeight;
}
