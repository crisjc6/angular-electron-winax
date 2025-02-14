import { MapScene } from "../scenes/map-scene/map-scene";
import { DecisionMakingScene } from "../scenes/decision-making-scene/decision-making-scene";
import { LoadScene } from "../scenes/load-scene/load-scene";
import { EndScene } from "../scenes/end-scene/end-scene";
import { WarningMessageScene } from "../scenes/warning-message-scene/warning-message-scene";

export const phaserGameConfigMap = {
    title: 'CUENCA HIDROGRAFICA GAME',
    backgroundColor: '#000000',
    parent: 'phaser_game_map',
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 812,
        // width: window.innerWidth/window.innerHeight > 21/9 ? 812 :
        //         window.innerWidth/window.innerHeight >= 16/10 && window.innerWidth/window.innerHeight <= 21/9 ?
        //             (window.innerWidth > 1440 ? 812 :  (window.innerWidth < 1024 ? 812 : window.innerWidth )):
        //         window.innerWidth/window.innerHeight > 4/3 && window.innerWidth/window.innerHeight < 16/10 ? 812 :
        //         window.innerWidth/window.innerHeight >= 1 && window.innerWidth/window.innerHeight <= 4/3 ? 812 :
        //         812,

        height: 635
        // height: window.innerWidth/window.innerHeight > 21/9 ? 800 :
        //         window.innerWidth/window.innerHeight >= 16/10 && window.innerWidth/window.innerHeight <= 21/9 ?
        //             (window.innerHeight > 800 ? 800 :  (window.innerHeight < 655 ? 800 : window.innerHeight )):
        //         window.innerWidth/window.innerHeight > 4/3 && window.innerWidth/window.innerHeight < 16/10 ? 800 :
        //         window.innerWidth/window.innerHeight >= 1 && window.innerWidth/window.innerHeight <= 4/3 ? 800 :
        //         800,

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
        MapScene,
        DecisionMakingScene,
        LoadScene,
        EndScene,
        WarningMessageScene
    ]
};