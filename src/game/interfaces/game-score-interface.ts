export interface GameScoreDataInterface {
    id: number;
    teamName: string;
    score: number;
}

export interface ScoreItemInterface {
    itemNumber: Phaser.GameObjects.Text;
    itemName: Phaser.GameObjects.Text;
    itemScore: Phaser.GameObjects.Text;
    itemContainer: Phaser.GameObjects.Container
}