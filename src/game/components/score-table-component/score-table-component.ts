import { generateGameObjectImage } from "../../functions/image-functions/image-functions";
import { generateGameObjectText } from "../../functions/text-functions/text-functions";
import { GameElementSpecificationsInterface } from "../../interfaces/game-element-specifications-interface";
import { GameObjectScaleInterface } from "../../interfaces/game-object-scale-interface";
import { GameScoreDataInterface, ScoreItemInterface } from "../../interfaces/game-score-interface";
import { ColorsString } from "../../settings/game-constants-strings/text-styles-string";


export class ScoreTableComponent extends Phaser.GameObjects.Container {

    public scene: Phaser.Scene;
    private scoreTableSpecifications: GameElementSpecificationsInterface;
    private tableData: GameScoreDataInterface
    private scoreTableBackground: Phaser.GameObjects.Image;
    private scoreTableTitle: Phaser.GameObjects.Text;
    private rowsNumber: number;
    private scoreItems;

    constructor(scene: Phaser.Scene, scoreTableSpecifications: GameElementSpecificationsInterface, tableData: GameScoreDataInterface) {
        super(scene, 0, 0);
        
        this.scoreTableSpecifications = JSON.parse(JSON.stringify(scoreTableSpecifications));
        this.tableData = tableData;
        this.setSize(this.scoreTableSpecifications.scale.objectWidth, this.scoreTableSpecifications.scale.objectHeight);
        this.setPosition(this.scoreTableSpecifications.scale.objectPositionX, this.scoreTableSpecifications.scale.objectPositionY);
        this.rowsNumber = 4;
        this.generateScoreTable(4);
        // this.scoreTableBackground.setAlpha(0.60);
        // this.scoreTableBackground.displayHeight *= 1.04;
        this.updateDependenceScoreTable();
    }

    private generateScoreTable(scoresNumber: number) {
        this.scoreTableBackground = generateGameObjectImage(this.scene, this.scoreTableSpecifications);
        this.scoreTableBackground.setPosition(0, 0);
        
        // this.scoreTableBackground.setAlpha(0.50);

        const containerScale: GameObjectScaleInterface = JSON.parse(JSON.stringify(this.scoreTableSpecifications.scale));
        containerScale.objectWidth *= 0.90;
        containerScale.objectHeight *= 0.96;
    
        this.scoreItems = new Map();

        const boxWidth = containerScale.objectWidth;
        const boxHeight = containerScale.objectHeight / (scoresNumber + 1.33);

        const originPositionX = 0;
        let originPositionY = (- containerScale.objectHeight / 2) + (boxHeight * 0.60);
    
        const titleSecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(this.scoreTableSpecifications));
        titleSecifications.style.fontSize = (boxHeight * 0.50) +'px'
        titleSecifications.scale.objectPositionX = originPositionX;
        titleSecifications.scale.objectPositionY = originPositionY;
        titleSecifications.scale.objectWidth = boxWidth;
        titleSecifications.scale.objectHeight = boxHeight * 2;
        this.scoreTableTitle = generateGameObjectText(this.scene, titleSecifications);
        originPositionY += boxHeight * 1.06;
        
        const scoreRowSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(this.scoreTableSpecifications));

        scoreRowSpecifications.scale.objectPositionX = 0;
        scoreRowSpecifications.scale.objectPositionY = 0;
        scoreRowSpecifications.style.fontSize = (boxHeight * 0.43) + 'px';
        scoreRowSpecifications.style.color = ColorsString.DARK_BLUE_HEXADECIMAL_STRING,
        scoreRowSpecifications.scale.objectWidth = boxWidth;
        scoreRowSpecifications.scale.objectHeight = boxHeight * 0.95;

        const playerPositionWidth = scoreRowSpecifications.scale.objectWidth * 0.09;
        const playerPositionX = -scoreRowSpecifications.scale.objectWidth / 2 + playerPositionWidth;
        const playerNameWidth = scoreRowSpecifications.scale.objectWidth * 0.60;
        const playerNameX = playerPositionX * 0.9;
        const playerScoreWidth = scoreRowSpecifications.scale.objectWidth * 0.22;
        const playerScoreX = playerNameX + playerNameWidth + playerScoreWidth;
        
        this.add([this.scoreTableBackground, this.scoreTableTitle]);

        for (let row = 0 ; row < scoresNumber; row++) {
            const positionY = (originPositionY + (boxHeight * row * 0.95) );
            
            const playerNumberSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(scoreRowSpecifications));
            playerNumberSpecifications.content = (row + 1) + '° ';
            playerNumberSpecifications.scale.objectWidth = playerPositionWidth;
            playerNumberSpecifications.scale.objectPositionX = playerPositionX;
            playerNumberSpecifications.style.align = 'right';

            const playerNameSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(scoreRowSpecifications));
            playerNameSpecifications.content = '-';
            playerNameSpecifications.scale.objectWidth = playerNameWidth;
            playerNameSpecifications.scale.objectPositionX = playerNameX;
            playerNameSpecifications.style.align = 'justify';

            const playerScoreSpecifications: GameElementSpecificationsInterface = JSON.parse(JSON.stringify(scoreRowSpecifications));
            playerScoreSpecifications.content = '-';
            playerScoreSpecifications.scale.objectWidth = playerScoreWidth;
            playerScoreSpecifications.scale.objectPositionX = playerScoreX;
            playerScoreSpecifications.style.align = 'right';

            const itemObjects: ScoreItemInterface = this.generateRowScore(/*itemBackgroundSpecifications,*/ playerNumberSpecifications, playerNameSpecifications, playerScoreSpecifications);
            itemObjects.itemContainer.setSize(
                scoreRowSpecifications.scale.objectWidth,
                scoreRowSpecifications.scale.objectHeight
            );
            
            itemObjects.itemContainer.y = positionY;
            this.add(itemObjects.itemContainer);
            this.scoreItems.set(row, itemObjects);
        }
    }

    private generateRowScore(
        playerNumberSpecifications: GameElementSpecificationsInterface,
        playerNameDescriptions: GameElementSpecificationsInterface,
        scoreConentDescriptions: GameElementSpecificationsInterface
    ): ScoreItemInterface {
        
        const playerNumberText = generateGameObjectText(this.scene, playerNumberSpecifications);
        playerNumberText.setOrigin(1, 0.5);

        const playerNameText = generateGameObjectText(this.scene, playerNameDescriptions);
        playerNameText.setOrigin(0, 0.5);
        
        const playerScoreText = generateGameObjectText(this.scene, scoreConentDescriptions);
        playerScoreText.setOrigin(1, 0.5);

        const itemContainer = new Phaser.GameObjects.Container(this.scene, 0, 0, [playerNumberText, playerNameText, playerScoreText]);
     
        const scoreItem: ScoreItemInterface = {
            itemNumber: playerNumberText,
            itemName: playerNameText,
            itemScore: playerScoreText,
            itemContainer: itemContainer
        }

        return scoreItem;
    }

    public updateDependenceScoreTable() {
        this.scoreTableBackground.clearAlpha();
        console.log(this.tableData);
        for (let row = 0; row <= this.rowsNumber; row++) {
            const scoreItem: ScoreItemInterface  = this.scoreItems.get(row);
            if ((scoreItem !== null && scoreItem !== undefined) && (this.tableData[row] !== null && this.tableData[row] !== undefined)) {
                const scoreData: GameScoreDataInterface = this.tableData[row];
                scoreItem.itemName.setText(scoreData.teamName);
                scoreItem.itemScore.setText('' + scoreData.score);
            }
        } 
    }
}
