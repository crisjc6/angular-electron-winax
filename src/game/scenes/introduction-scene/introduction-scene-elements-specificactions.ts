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
            objectWidth: 1480,
            objectHeight: 870,
            objectPositionX: 690,
            objectPositionY: 425,
        }
    },
    {
        type: 'text',
        element: 'title',
        name: 'game-title',
        content: 'JUEGO SERIO GIRHA\nRÍO SAN PEDRO - CHISINCHE',
        style: {
            fontFamily: GameFontStylesString.BIG_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING,
            strokeThickness: textFontSize.VeryBig.strokeThickness,
            fontSize: '70px',
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 1200,
            objectHeight: 70,
            objectPositionX: 683,
            objectPositionY: 170,
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
            strokeThickness: textFontSize.VerySmall.strokeThickness,
            fontSize: textFontSize.VerySmall.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 71,
            objectHeight: 100,
            // objectWidth: 100,
            // objectHeight: 140,
            objectPositionX: 520,
            objectPositionY: 666,
        }
    }
]