import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, ColorsValue, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const decisionMakingSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
        assetName: 'panel-card-2-background',
        name: 'panel-backgroud',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            // objectWidth: 1066,
            objectWidth: 770,
            objectHeight: 560,
            objectPositionX: 405,
            objectPositionY: 315,
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
            fontSize: textFontSize.VeryVerySmall.fontSize,
            strokeThickness: textFontSize.VeryVerySmall.strokeThickness,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 55,
            objectHeight: 75,
            objectPositionX: 762,
            // objectPositionY: 90,
            objectPositionY: 70,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'decision-title',
        content: 'DECISIÓN N° 1',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.LIGHT_GREEN_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: '25px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 720,
            objectHeight: 70,
            objectPositionX: 405,
            // objectPositionY: 154,
            // objectPositionY: 120,
            objectPositionY: 89,
        },
    },
    {
        type: 'text',
        element: 'title',
        name: 'decision-text',
        content: 'Por el rápido aumento de la población del Ecuador, el cantón Mejía al ser eminentemente agrícola-ganadero y para aumentar su economía planea incrementar su producción agrícola por lo que se podrían ejecutar las siguientes acciones:',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.PURPLE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.VerySmall.fontSize,
            strokeThickness: 1,
            stroke: ColorsString.BLACK_HEXADECIMAL_STRING
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 700,
            objectHeight: 60,
            objectPositionX: 405,
            // objectPositionY: 241,
            // objectPositionY: 210,
            objectPositionY: 174,
        },
    },
    {
        type: 'decision-box',
        element: 'decision-box',
        name: 'decision-opcion-1',
        content: 'Aumentar 200 Ha con cobertura de regadío en la parroquia de Aloasí.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.JUSTIFY_STRING,
            fontSize: textFontSize.LitleVerySmall.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 650,
            objectHeight: 70,
            objectPositionX: 405,
            objectPositionY: 285,
            // objectPositionY: 729,
        }
    },
    {
        type: 'decision-box',
        element: 'decision-box',
        name: 'decision-opcion-2',
        content: 'Expandir el área agrícola hasta la cota de los 3800 msnm en el cerro el Corazón e Ilinizas para aumentar la producción de papas.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.JUSTIFY_STRING,
            fontSize: textFontSize.LitleVerySmall.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 650,
            objectHeight: 70,
            objectPositionX: 405,
            objectPositionY: 376,
            // objectPositionY: 729,
        }
    },
    {
        type: 'decision-box',
        element: 'decision-box',
        name: 'decision-opcion-3',
        content: 'Invertir en la repotenciación del parque del Agua como un atractivo turístico en la época de verano.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.BLUE_HEXADECIMAL_STRING,
            align: AlingString.JUSTIFY_STRING,
            fontSize: textFontSize.LitleVerySmall.fontSize
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 650,
            objectHeight: 70,
            objectPositionX: 405,
            objectPositionY: 461,
            // objectPositionY: 729,
        }
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'next-button-background',
        name: 'continue-button',
        content: 'SIGUIENTE',
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
            objectPositionY: 543,
            // objectPositionY: 729,
        }
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'quit-button-background',
        name: 'back-button',
        content: 'ATRÁS',
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
            objectPositionY: 543,
            // objectPositionY: 729,
        }
    }
]