import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const loginSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
        name: 'login-backgroud',
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
        content: 'INGRESO AL JUEGO',
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
        content: 'INGRESA EL NOMBRE DE TU EQUIPO',
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
        type: 'html-dom',
        element: 'input',
        name: 'login-input',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.GREEN_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Regular.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 600,
            objectHeight: 70,
            objectPositionX: 683,
            objectPositionY: 400,
        }
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'continue-button-background',
        name: 'continue-button',
        content: 'INGRESAR',
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
            objectPositionY: 550,
            // objectPositionY: 729,
        }
    }
]