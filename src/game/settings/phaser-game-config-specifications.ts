import { MainScene } from "../scenes/main-scene/main-scene";
import { SettingsMenu } from "../scenes/settings-menu/settings-menu";
import { InfoScene } from "../scenes/info-scene/info-scene";
import { TopBestPlayerScene } from "../scenes/top-best-players-scene/top-best-players-scene";

export const phaserGameConfig = {
    title: 'CUENCA HIDROGRAFICA GAME',
    backgroundColor: '#000000',
    parent: 'phaser_game',
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: window.innerWidth/window.innerHeight > 21/9 ? 1366 :
                window.innerWidth/window.innerHeight >= 16/10 && window.innerWidth/window.innerHeight <= 21/9 ?
                    (window.innerWidth > 1440 ? 1440 :  (window.innerWidth < 1024 ? 1366 : window.innerWidth )):
                window.innerWidth/window.innerHeight > 4/3 && window.innerWidth/window.innerHeight < 16/10 ? 1366 :
                window.innerWidth/window.innerHeight >= 1 && window.innerWidth/window.innerHeight <= 4/3 ? 1024 :
                1366,

        height: window.innerWidth/window.innerHeight > 21/9 ? 761 :
                window.innerWidth/window.innerHeight >= 16/10 && window.innerWidth/window.innerHeight <= 21/9 ?
                    (window.innerHeight > 800 ? 761 :  (window.innerHeight < 655 ? 761 : window.innerHeight )):
                window.innerWidth/window.innerHeight > 4/3 && window.innerWidth/window.innerHeight < 16/10 ? 761 :
                window.innerWidth/window.innerHeight >= 1 && window.innerWidth/window.innerHeight <= 4/3 ? 720 :
                761,

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
        MainScene,
        SettingsMenu,
        InfoScene,
        TopBestPlayerScene
    ]
};