import { GameAssetsSpecificationsInterface } from '../interfaces/game-element-specifications-interface';
import { GameElementsString } from './game-constants-strings/game-elements-strings';

export const gameAssets: GameAssetsSpecificationsInterface[] = [
    /*********** BUTTONS***************/
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'play-game-button-background',
        path: '.../../assets/game-assets/boot-load-assets/buttons-assets/play-game-button-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'continue-button-background',
        path: '.../../assets/game-assets/boot-load-assets/buttons-assets/continue-button-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'next-button-background',
        path: '.../../assets/game-assets/boot-load-assets/buttons-assets/next-button-background.png'
    },

    /*************************** ICONS *******************************/
   
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'help-icon-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/help-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'home-icon-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/home-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'info-icon-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/info-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'score-icon-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/score-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'close-button-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/close-button-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'off-sound-icon-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/off-sound-icon-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'on-sound-icon-background',
        path: '.../../assets/game-assets/boot-load-assets/icons-assets/on-sound-icon-background.png'
    },
     /*************************** CARDS *******************************/
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'panel-card-background',
        path: '.../../assets/game-assets/boot-load-assets/cards-assets/panel-card-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'panel-card-2-background',
        path: '.../../assets/game-assets/boot-load-assets/cards-assets/panel-card-2-background.png'
    },
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'score-table-background',
        path: '.../../assets/game-assets/boot-load-assets/cards-assets/score-table-background.png'
    },

    /*************************** BACKGROUNS *******************************/
    {
        type: GameElementsString.IMAGE_STRING,
        key: 'modal-scene-background',
        path: '.../../assets/game-assets/boot-load-assets/scene-backgrounds-assets/modal-scene-background.png'
    },
];