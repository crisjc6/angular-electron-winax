import { GameAssetsSpecificationsInterface } from '../interfaces/game-element-specifications-interface';
import { GameElementsString } from './game-constants-strings/game-elements-strings';

export const gameAssets: GameAssetsSpecificationsInterface[] = [
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'main-scene-background',
        // path: '../../../assets/game_assets/main-scene-background.png'
        path: '../../assets/game-assets/main-scene-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'play-game-button-background',
        // path: '../../../assets/game_assets/play-game-button-background.png'
        path: '../../assets/game-assets/play-game-button-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'info-icon-background',
        // path: '../../../assets/game_assets/info-icon-background.png'
        path: '../../assets/game-assets/info-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'assistant-icon-background',
        // path: '../../../assets/game_assets/info-icon-background.png'
        path: '../../assets/game-assets/assistant-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'settings-icon-background',
        // path: '../../../assets/game_assets/settings-icon-background.png'
        path: '../../assets/game-assets/settings-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'score-icon-background',
        // path: '../../../assets/game_assets/score-icon-background.png'
        path: '../../assets/game-assets/score-icon-background.png'
    }
];