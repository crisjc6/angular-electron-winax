import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const endSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
            objectWidth: 750,
            objectHeight: 560,
            objectPositionX: 405,
            objectPositionY: 315,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'decision-title',
        content: 'JUEGO COMPLETADO',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Medium.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 720,
            objectHeight: 70,
            objectPositionX: 405,
            // objectPositionY: 154,
            // objectPositionY: 120,
            objectPositionY: 90,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'decision-text',
        content: 'Resumen de resultados',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_PURPLE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.VerySmall.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 700,
            objectHeight: 60,
            objectPositionX: 405,
            // objectPositionY: 241,
            // objectPositionY: 210,
            objectPositionY: 180,
        },
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'next-button-background',
        name: 'quit-button',
        content: 'SALIR',
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
            objectPositionY: 540,
            // objectPositionY: 729,
        }
    }
]
