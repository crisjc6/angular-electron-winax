import { GameAssetsSpecificationsInterface } from "./../../interfaces/game-element-specifications-interface";
import { GameElementsString } from "./../../settings/game-constants-strings/game-elements-strings";

export function loadAssetsArrayGame(
    _scene: Phaser.Scene,
    _gameAssetsSpecifications: GameAssetsSpecificationsInterface[]
) {
    
    _gameAssetsSpecifications.forEach(
        assetSpecificarions => {
            loadAssetGame(_scene, assetSpecificarions);
        }
    );
}

export function loadAssetGame(
    _scene: Phaser.Scene,
    _gameAssetSpecifications: GameAssetsSpecificationsInterface
) {
    switch (_gameAssetSpecifications.type) {
        case GameElementsString.IMAGE_STRING : {
            _scene.load.image(
                _gameAssetSpecifications.key,
                _gameAssetSpecifications.path
            );
            break;
        }

        case GameElementsString.VIDEO_STRING : {
            _scene.load.video(
                _gameAssetSpecifications.key,
                _gameAssetSpecifications.path,
                _gameAssetSpecifications.loadEvent,
                _gameAssetSpecifications.asBlob,
                _gameAssetSpecifications.noAudio,
            );
            break;
        }

        case GameElementsString.JSON_STRING : {
            _scene.load.json(
                _gameAssetSpecifications.key,
                _gameAssetSpecifications.path
            );
            break;
        }

        default: {
            break; 
        }
    }
}

