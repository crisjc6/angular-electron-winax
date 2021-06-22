import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { AlingString, ColorsString, GameFontStylesString, textFontSize } from "../../settings/game-constants-strings/text-styles-string";

export const loadSceneElementsSpecifications: GameElementSpecificationsInterface[] = [
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
        name: 'load-text',
        content: 'EJECUTANDO DECISIONES PARA LOS PRÓXIMOS 10 AÑOS\n\nESPERE UN MOMENTO . . .',
        style: {
            fontFamily: GameFontStylesString.BASE_FONT,
            color: ColorsString.WHITE_HEXADECIMAL_STRING,
            align: AlingString.CENTER_STRING,
            fontSize: textFontSize.Small.fontSize,
        },
        scale: {
            objectWidthRatio: 1,
            objectHeightRatio: 1,
            objectWidth: 700,
            objectHeight: 60,
            objectPositionX: 405,
            objectPositionY: 315,
        },
    }
]
