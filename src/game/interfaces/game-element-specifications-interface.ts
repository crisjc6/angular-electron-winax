import { GameObjectScaleInterface } from "./game-object-scale-interface";

export interface GameElementSpecificationsInterface {
    type: string;
    element: string;
    assetName?: string;
    name: string;
    content?: string;
    style?: Phaser.Types.GameObjects.Text.TextStyle;
    scale: GameObjectScaleInterface;
    originX?: number;
    originY?: number;
}

export interface GameAssetsSpecificationsInterface {
    type: string;
    key: string;
    path: string;
    atlasURL?: string;
    frameSize?: {
        frameWidth: number;
        frameHeight: number;
    };
    loadEvent?: string;
    asBlob?: boolean;
    noAudio?: boolean;
}

