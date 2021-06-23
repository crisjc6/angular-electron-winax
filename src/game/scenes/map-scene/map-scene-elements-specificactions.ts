import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const mapSceneElemntSpecifictions: GameElementSpecificationsInterface[] = [
    {
        type: 'image',
        element: 'background',
        assetName: 'map-background',
        name: 'map-scene-background',
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
        type: 'text',
        element: 'title',
        name: 'game-title',
        content: 'CUENCA DEL\nRÍO SAN PEDRO - CHISINCHE',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            // strokeThickness: textFontSize.Medium.strokeThickness,
            fontSize: '30px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 600,
            objectHeight: 40,
            objectPositionX: 405,
            // objectPositionY: 70,
            objectPositionY: 102,
        }
    },
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
            objectPositionX: 78,
            objectPositionY: 70,
        }
    },
    {
        type: 'text',
        element: 'title',
        content: 'PUNTOS: 0',
        name: 'total-score',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_PURPLE_HEXADECIMAL_STRING,
            align: AlingString.RIGHT_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.Small.strokeThickness,
            fontSize: textFontSize.Small.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 450,
            objectHeight: 40,
            objectPositionX: 775,
            // objectPositionY: 26,
            objectPositionY: 30,
        },
        originX: 1,
        originY: 0
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'play-game-button-background',
        name: 'continue-button',
        content: 'TOMAR DECISIÓN',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.WHITE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.VerySmall.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 250,
            objectHeight: 50,
            objectPositionX: 660,
            objectPositionY: 580,
        }
    },
    /**********************************************************************/
    //     type: 'button',
    //     element: 'bottom-title-button',
    //     assetName: 'home-icon-background',
    //     content: 'INICIO',
    //     name: 'home-button',
    //     style: {
    //         fontFamily: GameFontStylesString.BASE_FONT,
    //         color: ColorsString.BLACK_HEXADECIMAL_STRING,
    //         align: AlingString.CENTER_STRING,
    //         stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
    //         strokeThickness: textFontSize.VerySmall.strokeThickness,
    //         fontSize: textFontSize.VerySmall.fontSize,
    //     },
    //////////////////////////////////////////// 20-30-1 ////////////////
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'agua-riego-icon-background',
        name: 'P_20_30_1_1-background',
        content: 'R. Aloasi',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 60,
            objectHeight: 40,
            objectPositionX: 520,
            objectPositionY: 410,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'agricola-icon-background',
        name: 'P_20_30_1_2-background',
        content: 'A. Ilinizas',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '9px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 49,
            objectHeight: 41,
            objectPositionX: 578,
            objectPositionY: 306,
        }
    },
    //////////////////////////////////////// 20-30-2 ////////////////////
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'bosque-icon-background',
        name: 'P_20_30_2_2-background',
        content: 'B. Comercial',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 65,
            objectHeight: 53,
            objectPositionX: 225,
            objectPositionY: 335,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'acus-icon-background',
        name: 'P_20_30_2_3-background',
        content: 'Restauración',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 44,
            objectHeight: 44,
            objectPositionX: 175,
            objectPositionY: 447,
        }
    },
    ///////////////////////////////// 30-40-1 ///////////////////////////
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'acus-icon-background',
        name: 'P_30_40_1_2-background',
        content: 'Silvopastura',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 40,
            objectHeight: 44,
            objectPositionX: 535,
            objectPositionY: 345,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'fabrica-icon-background',
        name: 'P_30_40_1_3-background',
        content: 'F. Leche',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 48,
            objectHeight: 50,
            objectPositionX: 432,
            objectPositionY: 465,
        }
    },
    ///////////////////////////////// 30-40-2 ///////////////////////////
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'acus-icon-background',
        name: 'P_30_40_2_1-background',
        content: 'Área Protegida',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 48,
            objectHeight: 60,
            objectPositionX: 120,
            objectPositionY: 460,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        // assetName: 'acus-icon-background',
        assetName: 'bosque-icon-background',
        name: 'P_30_40_2_3-background',
        content: 'Bosque Protector',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 56,
            objectHeight: 66,
            objectPositionX: 590,
            objectPositionY: 390,
        }
    },
    /////////////////////////////// 40-50-1 /////////////////////////////
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'fabrica-icon-background',
        name: 'P_40_50_1_1-background',
        content: 'F. Papa',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 48,
            objectHeight: 48,
            objectPositionX: 233,
            objectPositionY: 425,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'agricola-icon-background',
        name: 'P_40_50_1_3-background',
        content: 'Uvilla',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 43,
            objectHeight: 40,
            objectPositionX: 480,
            objectPositionY: 378,
        }
    },
    //////////////////////////////// 40-50-2 ////////////////////////////
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'agua-riego-icon-background',
        name: 'P_40_50_2_1-background',
        content: 'Aspersión',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 64,
            objectHeight: 38,
            objectPositionX: 433,
            objectPositionY: 410,
        }
    },
    {
        type: 'button',
        element: 'bottom-title-button',
        assetName: 'acus-icon-background',
        name: 'P_40_50_2_2-background',
        content: 'Conservación',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.BLACK_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: 2,
            fontSize: '10px'
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 45,
            objectHeight: 48,
            objectPositionX: 652,
            objectPositionY: 365,
        }
    },

]