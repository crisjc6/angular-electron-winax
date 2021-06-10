import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";

export function generateHtmlInput(
    _scene: Phaser.Scene,
    _htmlDOMSpecifications: GameElementSpecificationsInterface,
    htmlWidth: number
) {
    
    const htmlDOMElement: any = _scene.add.dom(_htmlDOMSpecifications.scale.objectPositionX, _htmlDOMSpecifications.scale.objectPositionY)
                                    .createElement(
                                        'input',
                                        'padding: 12px 20px; margin: 8px 0; box-sizing: border-box; border: 2px solid red; border-radius: 4px; align-content: center;' + 
                                        ' font: '+ _htmlDOMSpecifications.style.fontSize + _htmlDOMSpecifications.style.fontFamily + ';' +
                                        ' width: ' + _htmlDOMSpecifications.scale.objectWidth +
                                        'px; height: ' + _htmlDOMSpecifications.scale.objectHeight + 'px;',
                                        'equipo'
                                    );

    return htmlDOMElement;
}