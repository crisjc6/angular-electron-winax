import { GameScoreDataInterface } from "../interfaces/game-score-interface"

export const enum GameSpecifications {
    GAME_NAME = 'DARCH'
}

export const gameRouterLink: {routerLink: any} = {
    routerLink: null
}

export const gameStatus: {
    status: string;
    conectionStatus: boolean;
    gameMusic: any;
    isMusicPlaying: boolean;
    isSoundMuted: boolean;
} = {
    status: 'bootLoad',
    conectionStatus: false,
    gameMusic: null,
    isMusicPlaying: false,
    isSoundMuted: true,
}

export const playerData: GameScoreDataInterface = {
    id: 0,
    score: 0,
    teamName: ''
}


