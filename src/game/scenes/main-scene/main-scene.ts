// import { ButtonComponent } from "././.components/button-component/button-component";
// import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
// import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
// import { AlingString, ColorsString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";
import { GameFacade } from "../facade-scene/facade-scene";
import { sceneElemntSpecifictions } from "./main-scene-elements-specificactions";
import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";


// {
//     key: 'continue-button-background',
//     path: '../../assets/game_assets/boot-load-assets/buttons-assets/continue-button-background.png'
// },

export class MainScene extends Phaser.Scene {
    
    init() {

    }
    
    constructor() {
        super({
            key: GameSceneIdsStrings.MAIN_SCENE_ID
        });
    }

    preload() {
        this.load.image(
            'continue-button-background',
            '../../../assets/game-assets/continue-button-background.png'
        );
    }

    create() {
        const fachada = new GameFacade(this, sceneElemntSpecifictions);
    }

    update() {

    }



}