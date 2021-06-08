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
            objectHeight: 768,
            objectPositionX: 683,
            objectPositionY: 384,
        }
    },
    {
        type: 'text',
        element: 'title',
        name: 'game-title',
        content: 'BIENVENIDO AL JUEGO DARCH',
        style: {
            fontFamily: GameFontStylesString.BIG_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.VeryBig.strokeThickness,
            fontSize: textFontSize.VeryBig.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1102,
            objectHeight: 81,
            objectPositionX: 683,
            // objectPositionY: 112,
            objectPositionY: 112,
        }
    },
    {
        
        type: 'button',
        element: 'simple-button',
        // type: 'interactiveObject',
        // element: 'simple-button',
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
            objectWidth: 400,
            objectHeight: 152,
            objectPositionX: 1076,
            objectPositionY: 406,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'info-icon-background',
        content: 'INFORMACIÓN',
        name: 'info-button',
        // name: globalGameElementsName.INFO_BUTTON,
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
            // objectPositionX: 175,
            objectPositionX: 148,
            objectPositionY: 660,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'assistant-icon-background',
        name: 'assistant-button',
        // name: globalGameElementsName.ASSISTANT_BUTTON,
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
            // objectPositionX: 410,
            objectPositionX: 363,
            objectPositionY: 660,
        },
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'settings-icon-background',
        content: 'AJUSTES',
        // name: globalGameElementsName.SETTINGS_BUTTON,
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
            // objectPositionX: 1258,
            // objectPositionY: 641,
            // objectPositionX: 602,
            objectPositionX: 555,
            objectPositionY: 660,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'score-icon-background',
        content: 'PUNTUACIONES',
        // name: globalGameElementsName.SCORE_BUTTON,
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
            // objectPositionX: 824,
            // objectPositionY: 635,
            objectPositionX: 777,
            objectPositionY: 660,
        }
    }
]