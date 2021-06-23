export interface GameScoreDataInterface {
    id?: number;
    teamName?: string;
    score?: number;
}

export interface ScoreItemInterface {
    itemNumber: Phaser.GameObjects.Text;
    itemName: Phaser.GameObjects.Text;
    itemScore: Phaser.GameObjects.Text;
    itemContainer: Phaser.GameObjects.Container
}

export interface GameScoresinterface {
    periodDataIds: string[];
    totalScore: number;
    conservationAreaScores: {
      indicatorTotalScore: number,
      periodScores: any
    };
    hydroelectricTurbineScores: {
      indicatorTotalScore: number,
      periodScores: any
    };
    demandSiteScores: {
      indicatorTotalScore: number,
      periodScores: any
    };
    helpcareRiverScores: {
      indicatorTotalScore: number,
      periodScores: any
    };
}
