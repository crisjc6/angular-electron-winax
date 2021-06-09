import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";

export const sceneElemntSpecifictions: GameElementSpecificationsInterface[] = [
    {
        type: 'image',
        element: 'background',
        assetName: 'main-scene-background',
        name: 'main-scene-background',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1366,
            objectHeight: 770,
            objectPositionX: 683,
            objectPositionY: 384,
        }
    },
    {
        type: 'text',
        element: 'title',
        name: 'game-title',
        content: 'JUEGO SERIO GIRHA\nRÍO SAN PEDRO - CHISINCHE',
        style: {
            fontFamily: GameFontStylesString.BIG_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.ExtraBig.strokeThickness,
            fontSize: textFontSize.ExtraBig.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1200,
            objectHeight: 100,
            objectPositionX: 683,
            objectPositionY: 170,
        }
    },
    {
        
        type: 'button',
        element: 'simple-button',
        assetName: 'play-game-button-background',
        name: 'play-button',
        content: 'JUGAR',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.WHITE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Big.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 420,
            objectHeight: 162,
            objectPositionX: 1120,
            objectPositionY: 640,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'info-icon-background',
        content: 'INFORMACIÓN',
        name: 'info-button',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.Small.strokeThickness,
            fontSize: textFontSize.Small.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 100,
            objectHeight: 140,
            objectPositionX: 148,
            objectPositionY: 660,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'help-icon-background',
        name: 'help-button',
        content: 'AYUDA',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.Small.strokeThickness,
            fontSize: textFontSize.Small.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 100,
            objectHeight: 140,
            objectPositionX: 363,
            objectPositionY: 660,
        },
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'settings-icon-background',
        content: 'AJUSTES',
        name: 'settings-button',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.Small.strokeThickness,
            fontSize: textFontSize.Small.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 100,
            objectHeight: 140,
            objectPositionX: 555,
            objectPositionY: 660,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'score-icon-background',
        content: 'PUNTUACIONES',
        name: 'score-button',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.Small.strokeThickness,
            fontSize: textFontSize.Small.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 100,
            objectHeight: 140,
            objectPositionX: 777,
            objectPositionY: 660,
        }
    }
]