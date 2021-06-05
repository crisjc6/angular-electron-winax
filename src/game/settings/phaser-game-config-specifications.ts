import { MainScene } from "../scenes/main-scene/main-scene";

export const phaserGameConfig = {
    title: 'CUENCA HIDROGRAFICA GAME',
    backgroundColor: '#00FF00',
    parent: 'phaser_game',
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 400,
        height: 300,
    },
    render: {
        antialias: true
    },
    input: {
        keyboard: {
            target: window
        },
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 10 },
            debug: true,
        }
    },
    dom: { 
        createContainer: true
    },
    audio: {
        disableWebAudio: true
    },
    scene: [
        MainScene
    ]
};