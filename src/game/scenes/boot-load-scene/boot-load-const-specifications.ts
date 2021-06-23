import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const _loadBackgroundSpecifications: GameElementSpecificationsInterface = {
    type: 'image',
    element: 'background',
    assetName: 'main-scene-background',
    name: 'scene-backgroud',
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 1366,
        objectHeight: 770,
        objectPositionX: 683,
        objectPositionY: 384,
    }
};

export const _firstLogoSpecifications: GameElementSpecificationsInterface = {
    type: 'image',
    element: 'logo',
    assetName: 'first-logo-background',
    name: 'first-logo',
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 275,
        objectHeight: 150,
        objectPositionX: 108,
        objectPositionY: 75,
    },
    originX: 0,
    originY: 0
};

export const _secondLogoSpecifications: GameElementSpecificationsInterface = {
    type: 'image',
    element: 'logo',
    assetName: 'second-logo-background',
    name: 'second-logo',
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 150,
        objectHeight: 100,
        // objectWidth: 264,
        // objectHeight: 208,
        objectPositionX: 643,
        objectPositionY: 100,
    },
    originX: 0.5,
    originY: 0
};

export const _thirdLogoSpecifications: GameElementSpecificationsInterface = {
    type: 'image',
    element: 'logo',
    assetName: 'third-logo-background',
    name: 'third-logo',
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 325,
        objectHeight: 150,
        objectPositionX: 1258,
        objectPositionY: 75,
    },
    originX: 1,
    originY: 0
};

export const _titleGameSpecifications: GameElementSpecificationsInterface = {
    type: 'text',
    element: 'title',
    name: 'game-title',
    content: 'JUEGO SERIO GIRHA\nRÍO SAN PEDRO - CHISINCHE',
    style: {
        fontFamily: GameFontStylesString.BIG_FONT,
        // color: ColorsString.RED_HEXADECIMAL_STRING,
        color: ColorsString.WHITE_HEXADECIMAL_STRING,
        align: AlingString.CENTER_STRING,
        stroke: ColorsString.DARK_GRAY_HEXADECIMAL_STRING,
        // stroke: ColorsString.DARK_GREEN_HEXADECIMAL_STRING,
        // stroke: ColorsString.LIGHT_GRAY_HEXADECIMAL_STRING,
        strokeThickness: textFontSize.Regular.strokeThickness,
        fontSize: '70px',
    },
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 1340,
        objectHeight: 200,
        objectPositionX: 683,
        objectPositionY: 400,
    }
}

export const _progressBarSpecifications: GameElementSpecificationsInterface = {
    type: 'bar',
    element: 'progressBar',
    name: 'progressBar',
    content: '.',
    style: {
        fontFamily: GameFontStylesString.BASE_FONT,
        color: ColorsString.LIGHT_GRAY_HEXADECIMAL_STRING,
        align: AlingString.CENTER_STRING,
        fontSize: '50px',
    },
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 1150,
        objectHeight: 50,
        objectPositionX: 683,
        objectPositionY: 580,
    }
};

export const _progressTextSpecifications: GameElementSpecificationsInterface = {
    type: 'text',
    element: 'progressText',
    name: 'progressText',
    content: 'CARGANDO: 0%',
    style: {
        fontFamily: GameFontStylesString.BASE_FONT,
        color: ColorsString.WHITE_HEXADECIMAL_STRING,
        align: AlingString.CENTER_STRING,
        stroke: ColorsString.LIGHT_GRAY_HEXADECIMAL_STRING,
        fontSize: textFontSize.Medium.fontSize,
    },
    scale: {
        objectWidthRatio: 1,
        objectHeightRatio: 1,
        objectWidth: 700,
        objectHeight: 50,
        objectPositionX: 683,
        objectPositionY: 650,
    }
};
