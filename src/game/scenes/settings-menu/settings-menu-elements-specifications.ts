import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";

export const settingsMenuElementsSpecifications: GameElementSpecificationsInterface[] = [
    {
        type: 'image',
        element: 'background',
        assetName: 'modal-scene-background',
        name: 'scene-backgroud',
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
        type: 'image',
        element: 'background',
        assetName: 'panel-card-background',
        name: 'settings-menu-backgroud',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            // objectWidth: 1066,
            objectWidth: 1000,
            objectHeight: 500,
            objectPositionX: 683,
            objectPositionY: 384
        },
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'close-button-background',
        name: 'close-button',
        content: 'CERRAR',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Small.fontSize,
            strokeThickness: textFontSize.Small.strokeThickness,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 90,
            objectHeight: 110,
            objectPositionX: 1158,
            objectPositionY: 164,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'scene-title',
        content: 'AJUSTES DEL JUEGO',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Big.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 720,
            objectHeight: 70,
            objectPositionX: 683,
            // objectPositionY: 154,
            objectPositionY: 211,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'sound-title',
        content: 'SONIDO DEL JUEGO',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_PURPLE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Regular.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 720,
            objectHeight: 60,
            objectPositionX: 683,
            // objectPositionY: 241,
            objectPositionY: 305,
        },
    },
    {
        type: 'image',
        element: 'icon',
        assetName: 'on-switch-icon-background',
        name: 'sound-switch',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 200,
            objectHeight: 70,
            objectPositionX: 670,
            // objectPositionY: 340,
            objectPositionY: 415,
        },
    },
    {
        type: 'text',
        element: 'label',
        name: 'off-sound-title',
        content: 'APAGADO',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Medium.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 170,
            objectHeight: 50,
            objectPositionX: 475,
            // objectPositionY: 340,
            objectPositionY: 415,
        },
    },
    {
        type: 'text',
        element: 'label',
        name: 'on-sound-title',
        content: 'ENCENDIDO',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.LIGHT_PURPLE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Medium.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 170,
            objectHeight: 50,
            objectPositionX: 885,
            // objectPositionY: 340,
            objectPositionY: 415,
        },
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'continue-button-background',
        name: 'save-settings-button',
        content: 'GUARDAR AJUSTES',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.GREEN_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Medium.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 410,
            objectHeight: 75,
            objectPositionX: 683,
            objectPositionY: 558,
            // objectPositionY: 729,
        }
    }
]