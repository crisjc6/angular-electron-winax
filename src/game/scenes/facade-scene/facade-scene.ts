import { ButtonComponent } from "./../../components/button-component/button-component";
import { generateGameObjectImage } from "./../../functions/image-functions/image-functions";
import { generateGameObjectSprite } from "./../../functions/sprite-functions/sprite-functions";
import { generateGameObjectText } from "./../../functions/text-functions/text-functions";
import { generateGameObjectTable } from "./../../functions/table-functions/table-functions";
import { scaleGameObject } from "./../../functions/scale-functions/scale-functions";
import { GameElementFacadeInterface } from "./../../interfaces/game-element-facade-interface";
import { GameElementSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { GameElementsString } from "./../../settings/game-constants-strings/game-elements-strings";
import { HtmlDOMComponent } from "./../../components/html-dom-component/html-dom-component";
import { DecisionBoxComponent } from "./../../components/decision-box-component/decision-box-component";
import { TextCardComponent } from "./../../components/text-card-component/text-card-component";

export class GameFacade {
    private gameScene: Phaser.Scene;
    private gameObjects;
    private gameElementSpecifications: GameElementSpecificationsInterface[];

    constructor(_gameScene: Phaser.Scene, _gameElementSpecifications: GameElementSpecificationsInterface[]) {
        this.gameScene = _gameScene;
        this.gameElementSpecifications = JSON.parse(JSON.stringify(_gameElementSpecifications));
        this.gameObjects = new Map();

        this.createScene();
    }

    get getGameObjects() {
        return this.gameObjects;
    }

    private createScene() {
        this.generateGameObjectsScene();
        this.addGameObjectsToTheScene();
    }

    public generateGameObjectsScene() {
        this.gameElementSpecifications.forEach(
            gameElementSpecification => {
                gameElementSpecification.scale = scaleGameObject(this.gameScene, gameElementSpecification.scale);                
                this.gameObjects.set(
                    gameElementSpecification.name,
                    this.generateGameObject(JSON.parse(JSON.stringify(gameElementSpecification)))
                );
            }
        );
    }

    private generateGameObject(_gameElementSpecifications: GameElementSpecificationsInterface): GameElementFacadeInterface {
        
        let gameObject: Phaser.GameObjects.GameObject = null;

        switch (_gameElementSpecifications.type) {
            case GameElementsString.TEXT_STRING : {
                gameObject = generateGameObjectText(this.gameScene, _gameElementSpecifications);
                break;
            }

            case GameElementsString.IMAGE_STRING : {
                gameObject = generateGameObjectImage(this.gameScene, _gameElementSpecifications);
                break;
            }
            
            case GameElementsString.BUTTON_STRING : {
                gameObject = new ButtonComponent(this.gameScene, _gameElementSpecifications);
                break;
            }

            case GameElementsString.TEXT_CARD_STRING: {
                gameObject = new TextCardComponent(this.gameScene, _gameElementSpecifications);
                break;
            }

            case GameElementsString.SPRITE_STRING: {
                gameObject = generateGameObjectSprite(this.gameScene, _gameElementSpecifications);
                break;
            }

            case GameElementsString.TABLE_STRING: {
                gameObject = generateGameObjectTable(this.gameScene, _gameElementSpecifications);
                break;
            }

            case GameElementsString.HTML_DOM_STRING: {
                gameObject = new HtmlDOMComponent(this.gameScene, _gameElementSpecifications);
                break;
            }

            case GameElementsString.DECISION_BOX_STRING: {
                gameObject = new DecisionBoxComponent(this.gameScene, _gameElementSpecifications);
                break;
            }

            default: {
                gameObject = null;
                break;
            }
        }

        return {
            gameElementSpecification: _gameElementSpecifications,
            gameObject: gameObject
        };
    }

    public addGameObjectsToTheScene() {
        this.gameObjects.forEach(
            gameElement => {
                this.addGameObjectToTheScene(gameElement.gameObject);
            }
        );
    }

    public addGameObjectToTheScene(gameObject) {
        if (gameObject !== null) {
            this.gameScene.add.existing(gameObject);
        }
    }

}
