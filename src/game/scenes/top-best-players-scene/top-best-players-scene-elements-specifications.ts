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
        // assetName: 'score-table-background',
        assetName: 'panel-card-background',
        name: 'score-table',
        content: 'MEJORES PUNTAJES',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.RED_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Regular.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 520,
            objectHeight: 350,
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
            fontSize: '18px',
            strokeThickness: textFontSize.VerySmall.strokeThickness,
            stroke: ColorsString.WHITE_HEXADECIMAL_STRING
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 78,
            objectHeight: 96,
            objectPositionX: 945,
            objectPositionY: 230,
        },
    },
]
