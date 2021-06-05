import { GameElementSpecificationsInterface } from "./game-element-specifications-interface";

export interface GameElementFacadeInterface {
    gameElementSpecification: GameElementSpecificationsInterface;
    gameObject: Phaser.GameObjects.GameObject;
}
