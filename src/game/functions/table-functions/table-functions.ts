import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { SceneGameElementsString } from "../../settings/game-constants-strings/game-elements-strings";
import { ScoreTableComponent } from "../../components/score-table-component/score-table-component";
import { scoreDB } from "../../../assets/db/db";

export function generateGameObjectTable(
    _scene: Phaser.Scene,
    _tableSpecifications: GameElementSpecificationsInterface
): ScoreTableComponent {

    let gameObject: ScoreTableComponent = null;

    switch (_tableSpecifications.element) {
        case SceneGameElementsString.SCENE_SCORE_TABLE : {
            gameObject = new ScoreTableComponent(_scene, _tableSpecifications, JSON.parse(JSON.stringify(scoreDB)));
            break;
        }

        default: {
            gameObject = null;
            break;
        }
    }
    return gameObject;
}
