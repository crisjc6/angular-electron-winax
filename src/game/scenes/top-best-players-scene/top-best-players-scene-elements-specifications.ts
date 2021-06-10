import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";

export const topBestPlayersSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
        type: 'table',
        element: 'score-table',
        assetName: 'score-table-background',
        name: 'score-table',
        content: 'TOP 10 MEJORESJUGADORES',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.DARK_BLUE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Regular.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 520,
            objectHeight: 590,
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
            objectPositionX: 945,
            objectPositionY: 102,
        },
    },
]
