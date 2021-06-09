import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";

export const infoSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
        name: 'info-panel-backgroud',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1066,
            objectHeight: 600,
            objectPositionX: 683,
            objectPositionY: 384,
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
            objectPositionX: 1195,
            objectPositionY: 115,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'scene-title',
        content: 'INFORMACIÓN',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Big.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 720,
            objectHeight: 70,
            objectPositionX: 683,
            objectPositionY: 160,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'game-info',
        content: 'GIRHA (Gestión Integral del Recurso Hídrico y Ambiental)\nes un Juego Serio creado con el objetivo de promover de una manera atractiva y divertida el uso adecuado de los recursos hídricos de la cuenca del Río San Pedro, mediante la toma de decisión, comunicación y trabajo en equipo, con un diseño amigable y fácil de usar.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: '30px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 940,
            objectHeight: 174,
            objectPositionX: 683,
            objectPositionY: 370,
        },
    },
    {
        type: 'text',
        element: 'paragraph',
        name: 'developer-info',
        content: 'EQUIPO DE DESAROLLO\nCRISWEB.ME - info.crisweb@gmail.com',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            strokeThickness: 2,
            stroke: ColorsString.BLUE_HEXADECIMAL_STRING,
            fontSize: textFontSize.VerySmall.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 800,
            objectHeight: 120,
            objectPositionX: 683,
            objectPositionY: 615,
        },
    }
]