import { GameObjectScaleInterface } from "../../interfaces/game-object-scale-interface";
import { GameSpecifications, gameStatus } from "../../settings/game-system-specifications";

export function scaleGameObject(Scene: Phaser.Scene, currentScale: GameObjectScaleInterface): GameObjectScaleInterface {
    let currentWidthCanvas: number = Scene.sys.canvas.width;
    let currentHeightCanvas: number = Scene.sys.canvas.height;

    if (gameStatus.status === 'mainScene') {
        currentWidthCanvas = GameSpecifications.canvasWidth;
        currentHeightCanvas = GameSpecifications.canvasHeight;    
    }

    let defaultWidthCanvas = gameStatus.status === 'mainScene' ? 1366 : 810;
    let defaultHeightCanvas = gameStatus.status === 'mainScene' ? 768 : 630;
    let ratioWidth: number = currentWidthCanvas / defaultWidthCanvas;
    let ratioHeight: number = currentHeightCanvas / defaultHeightCanvas;

    const newObjectScale: GameObjectScaleInterface = {
        objectWidthRatio: ratioWidth,
        objectHeightRatio: ratioHeight,
        objectWidth: Math.trunc(currentScale.objectWidth * ratioWidth),
        objectHeight: Math.trunc(currentScale.objectHeight * ratioHeight),
        objectPositionX: Math.trunc(currentScale.objectPositionX * ratioWidth),
        objectPositionY: Math.trunc(currentScale.objectPositionY * ratioHeight),
    };
    return newObjectScale;
}
