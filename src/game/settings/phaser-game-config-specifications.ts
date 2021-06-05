// import { AbyssGameScene } from "../scenes/games-scenes/abyss-game/abyss-game-scene";
// import { TestGameScene } from "../scenes/games-scenes/game-test/main-scene";
// import { LastGameScene } from "../scenes/games-scenes/last-game/last-game-scene";
import { MainScene } from "../scenes/main-scene/main-scene";
// import { Phaser } from "./../../phaser@3.52.0/phaser.js";


export const phaserGameConfig = {
    title: 'JE-GAME',
    backgroundColor: '#ff0000',
    parent: 'phaser_game',
    type: Phaser.AUTO,
    scale: {
        // mode: Phaser.Scale.NONE,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        with: 50,
        height: 300,
        // with: 1080,
        // height: 1920,
        // width: window.innerWidth/window.innerHeight > 21/9 ? 1366 :
        //         window.innerWidth/window.innerHeight >= 16/10 && window.innerWidth/window.innerHeight <= 21/9 ?
        //             (window.innerWidth > 1440 ? 1440 :  (window.innerWidth < 1024 ? 1366 : window.innerWidth )):
        //         window.innerWidth/window.innerHeight > 4/3 && window.innerWidth/window.innerHeight < 16/10 ? 1366 :
        //         window.innerWidth/window.innerHeight >= 1 && window.innerWidth/window.innerHeight <= 4/3 ? 1024 :
        //         1366,

        // height: window.innerWidth/window.innerHeight > 21/9 ? 761 :
        //         window.innerWidth/window.innerHeight >= 16/10 && window.innerWidth/window.innerHeight <= 21/9 ?
        //             (window.innerHeight > 800 ? 761 :  (window.innerHeight < 655 ? 761 : window.innerHeight )):
        //         window.innerWidth/window.innerHeight > 4/3 && window.innerWidth/window.innerHeight < 16/10 ? 761 :
        //         window.innerWidth/window.innerHeight >= 1 && window.innerWidth/window.innerHeight <= 4/3 ? 720 :
        //         761,
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
        // AbyssGameScene
        // TestGameScene
        // LastGameScene
    ]
};