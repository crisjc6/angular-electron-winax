import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";

export const sceneElemntSpecifictions: GameElementSpecificationsInterface[] = [
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'continue-button-background',
        name: 'play-button',
        content: 'JUGAR',
        style: {
            // fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_GREEN_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.VerySmall.fontSize,
            // stroke: ColorsString.DARK_GREEN_HEXADECIMAL_STRING,
            // strokeThickness: textFontSize.VerySmall.strokeThickness
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 150,
            objectHeight: 40,
            objectPositionX: 200,
            objectPositionY: 100,
        }
    },
    {
        type: 'button',
        element: 'simple-button',
        assetName: 'continue-button-background',
        name: 'cancel-button',
        content: 'CANCELAR',
        style: {
            // fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_GREEN_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.VerySmall.fontSize,
            // stroke: ColorsString.DARK_GREEN_HEXADECIMAL_STRING,
            // strokeThickness: textFontSize.VerySmall.strokeThickness
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 150,
            objectHeight: 40,
            objectPositionX: 200,
            objectPositionY: 150,
        }
    },

]