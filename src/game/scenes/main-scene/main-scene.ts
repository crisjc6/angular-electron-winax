// import { ButtonComponent } from "././.components/button-component/button-component";
// import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
// import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
// import { AlingString, ColorsString, textFontSize } from "./../../settings/game-constants-strings/text-styles-string";
import { GameFacade } from "../facade-scene/facade-scene";
import { sceneElemntSpecifictions } from "./main-scene-elements-specificactions";
import { GameSceneIdsStrings } from "./../../settings/game-constants-strings/game-scene-ids-string";
import { ButtonComponent } from "./../../components/button-component/button-component";
import { EventsTouchedGameObjectsStrings } from "./../../settings/game-constants-strings/game-events-strings";
import { WeapService } from "../../../app/shared/services/weap-service";
import { loadFonts } from "../../functions/font-styles/font-styles-functions";
import { loadAssetsArrayGame } from "../../functions/load-assets-functions/load-assets-functions";
import { gameAssets } from "../../settings/game-assets";
import { gameRouterLink, phaserGameObject } from "../../settings/game-system-specifications";

// {
//     key: 'continue-button-background',
//     path: '../../assets/game_assets/boot-load-assets/buttons-assets/continue-button-background.png'
// },

export class MainScene extends Phaser.Scene {
    
    private gameObjects: any;
    private weapService: WeapService;

    init() {

    }
    
    constructor() {
        super({
            key: GameSceneIdsStrings.MAIN_SCENE_ID
        });
        
        this.weapService = new WeapService();
    }

    preload() {
        loadFonts();
        loadAssetsArrayGame(this, gameAssets);  
        // this.load.image(
        //     'continue-button-background',
        //     '../../../assets/game-assets/continue-button-background.png'
        // );
        
        this.gameObjects = new Map();
    }

    create() {
        const fachada = new GameFacade(this, sceneElemntSpecifictions);
        this.gameObjects = fachada.getGameObjects;

        const button = this.gameObjects.get('play-button').gameObject as ButtonComponent;

        button.setInteractive().on(
            EventsTouchedGameObjectsStrings.POINTERDOWN, () => {
                // this.weapService.openWeap();
                // <a routerLink="/detail">{{ 'PAGES.HOME.GO_TO_DETAIL' | translate }}</a>
                // this.scene.stop();
                // this.sys.game.destroy(true).then(() => this.goToSubjectPage())
                // .catch(() => this.goToSubjectPage());

                // gameRouterLink.routerLink.navigate(['/detail']);

                // callback () => {
                    // this.scene.st
                    this.sys.game.destroy(true);
                    gameRouterLink.routerLink.navigate(['/detail']);
                // }
                // this.destroyGame();

            }
        );
    }

    private async destroyGame(){
        let respuesta = await this.sys.game.destroy(true, true);
        // await phaserGameObject.game.destroy(true,true);
        // console.log(respuesta);
        // await gameRouterLink.routerLink.navigate(['/detail']);
        this.sys.game.events.on(
            'destroy',
            (events) => {
                // console.log(events)
                gameRouterLink.routerLink.navigate(['/detail']);
            }
        );
    }

    update() {

    }



}