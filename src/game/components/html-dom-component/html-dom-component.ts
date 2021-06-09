import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { generateHtmlInput } from "../../functions/html-dom-functions/html-dom-functions";

export class HtmlDOMComponent extends Phaser.GameObjects.Container {

    public scene: Phaser.Scene;
    protected htmlDOMSpecifications: GameElementSpecificationsInterface;
    protected htmlDOM: any;

    constructor(_scene: Phaser.Scene, _htmlDOMSpecifications: GameElementSpecificationsInterface) {
        super(_scene, _htmlDOMSpecifications.scale.objectPositionX, _htmlDOMSpecifications.scale.objectPositionY);

        this.scene = _scene;
        this.htmlDOMSpecifications = _htmlDOMSpecifications;
        this.generateComponent();
    }

    private generateComponent() {
        this.htmlDOM = generateHtmlInput(this.scene, this.htmlDOMSpecifications, this.scene.cameras.main.width * 0.75);
        this.htmlDOM.setPosition(0, 0);
        this.add(this.htmlDOM);
    }
}