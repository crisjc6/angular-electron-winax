import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";

export function generateGameObjectSprite (
    _scene: Phaser.Scene,
    _matterSpecifications: GameElementSpecificationsInterface
): Phaser.Physics.Matter.Sprite {
    const shapes = _scene.cache.json.get(_matterSpecifications.assetName + '-json');
    console.log(shapes);
    const gameObjectSprite = _scene.matter.add.sprite(
        _matterSpecifications.scale.objectPositionX,
        _matterSpecifications.scale.objectPositionY,
        _matterSpecifications.assetName,
        _matterSpecifications.assetName,

        shapes !== undefined ? 
            {
                shape: shapes.body
            }
            :
            {
                label: _matterSpecifications.assetName
            }
    );
    gameObjectSprite.setDepth(1);

    gameObjectSprite.setSize(
        _matterSpecifications.scale.objectWidth,
        _matterSpecifications.scale.objectHeight,
    );

    gameObjectSprite.setDisplaySize(
        _matterSpecifications.scale.objectWidth,
        _matterSpecifications.scale.objectHeight,
    );

    if (_matterSpecifications.element === 'static') {
        gameObjectSprite.setStatic(true);
    }
    // _scene.matter.world.setBounds(
    //     0,
    //     0,
    //     _matterSpecifications.scale.objectWidth,
    //     _matterSpecifications.scale.objectHeight,
    // );

    // this.cameras.main.setBounds(0, 0, this.virtualWorld.width, this.virtualWorld.height);
    // this.cameras.main.centerToBounds();

    // this.playerVelocityX = 8 * this.sys.canvas.width / defaultWidthCanvas;
    // this.playerVelocityY = 7 * this.sys.canvas.height / defaultHeightCanvas;

    // const gameObjectImage = new Phaser..Image(
    //     _scene,
    //     _imageSpecifications.scale.objectPositionX,
    //     _imageSpecifications.scale.objectPositionY,
    //     _imageSpecifications.assetName
    // );

    // gameObjectImage.setDisplaySize(
    //     _imageSpecifications.scale.objectWidth,
    //     _imageSpecifications.scale.objectHeight
    // );

    // gameObjectImage.setOrigin(
    //     _imageSpecifications.originX,
    //     _imageSpecifications.originY
    // );
    // gameObjectImage.scale = 0.5;
    return gameObjectSprite;
}
