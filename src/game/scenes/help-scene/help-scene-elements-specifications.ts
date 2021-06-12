import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const helpSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
        name: 'help-panel-backgroud',
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
        content: 'AYUDA',
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
        element: 'content',
        name: 'game-help',
        content: 'Toma decisiones sobre la gestión de los recuros hídricos de la Cuenca del Río San Pedro, dando clic en el Botón JUGAR\n\n'+
                 'Accede al juego ingresando el nombre de tu EQUIPO, toma las mejores decisiones y comprueba las consecuencias de tus acciones.\n\n'+
                 'Accede a la Tabla de Puntuación para visualizar el puntaje alcanzado por los equipos.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: '30px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1000,
            objectHeight: 174,
            objectPositionX: 683,
            objectPositionY: 400,
        },
    },
    {
        type: 'text',
        element: 'paragraph',
        name: 'developer-info',
        content: 'CRISWEB.ME - info.crisweb@gmail.com',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            strokeThickness: 1,
            stroke: ColorsString.BLUE_HEXADECIMAL_STRING,
            fontSize: '16px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 800,
            objectHeight: 120,
            objectPositionX: 683,
            objectPositionY: 655,
        },
    }
]