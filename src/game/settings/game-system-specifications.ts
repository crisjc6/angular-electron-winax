import { GameDecisionInterface } from "../interfaces/game-decision-interface"

export const cursorURL = {
    defaultCursorURL: 'url(assets/game-assets/boot-load-assets/cursors-assets/cursor-pointer.cur), pointer',
    interactiveCursorURL: 'url(assets/game-assets/boot-load-assets/cursors-assets/cursor-hand.cur), pointer'
}

export const GameSpecifications:{
    name: string;
    continueGame: boolean;
    gameDecisionsData: GameDecisionInterface[];
    currentPeriodIndex: number;
    decisionPeriodIds: string[];
    currentPeriodId: string;
    currentDecisionsPeriod: GameDecisionInterface;
    currentDecisionIndex: number;
    decisionIds: string[];
    currentDecisionId: string;
    appPath: string;
    gameOver: boolean;
    canvasWidth: number;
    canvasHeight: number;
} = {
    name: 'GIRHA',
    continueGame: false,
    gameDecisionsData: null,
    currentPeriodIndex: 0,
    decisionPeriodIds: [],
    currentPeriodId: '',
    currentDecisionsPeriod: null,
    currentDecisionIndex: 0,
    decisionIds: [],
    currentDecisionId: '',
    appPath: '',
    gameOver: false,
    canvasWidth: 1366,
    canvasHeight: 761
}

export const gameRouterLink: {routerLink: any} = {
    routerLink: null
}

export const servicioGraficaAC: {serviceArea: any} = {
    serviceArea: null
}
export const servicioPuntajes: {serviceScore: any} = {
    serviceScore: null
}

export const gameStatus: {
    status: string;
    conectionStatus: boolean;
    gameMusic: any;
    isMusicPlaying: boolean;
    isSoundMuted: boolean;
} = {
    status: 'mainScene',
    conectionStatus: false,
    gameMusic: null,
    isMusicPlaying: false,
    isSoundMuted: true,
}


