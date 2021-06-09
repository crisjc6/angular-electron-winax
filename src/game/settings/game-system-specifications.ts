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

// export const phaserGameObject: {game: Phaser.Game} = {
//     game: null
// }


