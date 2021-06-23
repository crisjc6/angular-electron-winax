import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, ColorsValue, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const warningMessageSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
    {
        type: 'image',
        element: 'background',
        assetName: 'modal-scene-background',
        name: 'scene-backgroud',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 810,
            objectHeight: 630,
            objectPositionX: 405,
            objectPositionY: 315,
        }
    },
    {
        type: 'image',
        element: 'background',
        assetName: 'panel-card-background',
        name: 'panel-backgroud',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            // objectWidth: 1066,
            objectWidth: 660,
            objectHeight: 290,
            objectPositionX: 405,
            objectPositionY: 315,
        },
    },
    {
        type: 'text',
        element: 'message',
        name: 'pop-up-message-title',
        content: 'ADVERTENCIA',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Medium.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 650,
            objectHeight: 70,
            objectPositionX: 405,
            // objectPositionY: 154,
            // objectPositionY: 120,
            objectPositionY: 225,
        },
    },
    {
        type: 'text',
        element: 'message',
        name: 'pop-up-message',
        content: '¿Seguro quieres salir del juego?\n\nNo olvides que el progreso y resultados obtenidos en el juego se reiniciarán.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.DARK_PURPLE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Small.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 660,
            objectHeight: 300,
            objectPositionX: 405,
            // objectPositionY: 241,
            // objectPositionY: 210,
            objectPositionY: 325,
        },
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'next-button-background',
        name: 'continue-button',
        content: 'CONTINUAR',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.WHITE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Small.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 200,
            objectHeight: 60,
            objectPositionX: 550,
            objectPositionY: 450,
            // objectPositionY: 729,
        }
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'quit-button-background',
        name: 'cancel-button',
        content: 'CANCELAR',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.WHITE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Small.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 200,
            objectHeight: 60,
            objectPositionX: 250,
            objectPositionY: 450,
            // objectPositionY: 729,
        }
    }
]