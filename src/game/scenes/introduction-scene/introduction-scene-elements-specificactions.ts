import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const introductionSceneElementSpecifictions: GameElementSpecificationsInterface[] = [
    {
        type: 'image',
        element: 'background',
        assetName: 'main-scene-background',
        name: 'main-scene-background',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            // objectWidth: 1366,
            objectWidth: 1366,
            objectHeight: 770,
            objectPositionX: 683,
            objectPositionY: 384,
        }
    },
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
        assetName: 'panel-card-2-background',
        name: 'panel-backgroud',
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            // objectWidth: 1066,
            objectWidth: 1200,
            objectHeight: 700,
            objectPositionX: 683,
            objectPositionY: 384,
        },
    },
    // {
    //     type: 'image',
    //     element: 'background',
    //     assetName: 'scene-title-background',
    //     name: 'scene-title-background',
    //     scale: {
    //         objectWidthRatio: 1,
    //         objectHeightRatio: 1,
    //         objectWidth: 572,
    //         objectHeight: 100,
    //         objectPositionX: 405,
    //         // objectPositionY: 154,
    //         // objectPositionY: 120,
    //         objectPositionY: 113,
    //     }
    // },
    
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'home-icon-background',
        content: 'INICIO',
        name: 'home-button',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.VerySmall.strokeThickness,
            fontSize: textFontSize.VerySmall.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 65,
            objectHeight: 86,
            objectPositionX: 210,
            objectPositionY: 130,
        }
    },
    {
        type: 'text',
        element: 'title',
        name: 'scene-title',
        content: 'SALUDOS EQUIPO ',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Regular.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 700,
            objectHeight: 40,
            objectPositionX: 683,
            objectPositionY: 123
        }
    },
    {
        type: 'text',
        element: 'content',
        name: 'scene-content',
        content: 'Sean bienvenidos a la Cuenca del Rio San Pedro, ahora forman parte del equipo encargado de gestionar los recursos hídricos de la cuenca. Su trabajo es tomar las mejores deciciones para un uso adecudo de los recurso hídricos y hacer prosperar esta zona del Ecuador.\nConversen entre ustedes y trabajen en equipo para tomar 2 deciciones en cada periodo de 10 años, desde 2020 al 2050.\n\nEs hora de demostrar sus conocimientos y obtener los mejores resultados para la cuenca.',
        // content: 'GIRHA (Gestión Integral del Recurso Hídrico y Ambiental)\nes un Juego Serio creado con el objetivo de promover de una manera atractiva y divertida el uso adecuado de los recursos hídricos de la cuenca del Río San Pedro, mediante la toma de decisiones, comunicación y trabajo en equipo, con un diseño amigable y fácil de usar.',
        style: {
            fontFamily: GameFontStylesString.SMALL_FONT,
            color: ColorsString.DARK_BLUE_HEXADECIMAL_STRING,
            align: AlingString.JUSTIFY_STRING,
            fontSize: '27px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1050,
            objectHeight: 500,
            objectPositionX: 683,
            objectPositionY: 386,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'on-sound-icon-background',
        name: 'sound-button',
        content: 'SONIDO',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            // strokeThickness: textFontSize.Small.strokeThickness,
            // fontSize: textFontSize.Small.fontSize,
            strokeThickness: textFontSize.VeryVerySmall.strokeThickness,
            fontSize: textFontSize.VeryVerySmall.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 65,
            objectHeight: 86,
            // objectWidth: 100,
            // objectHeight: 140,
            objectPositionX: 270,
            objectPositionY: 660,
        }
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'play-game-button-background',
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
            objectWidth: 270,
            objectHeight: 70,
            // objectPositionX: 695,
            // objectPositionY: 540,
            objectPositionX: 1005,
            objectPositionY: 642,
            // objectPositionY: 666,
            // objectPositionY: 729,
        }
    },
]