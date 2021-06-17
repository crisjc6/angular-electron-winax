import { GameDecisionInterface } from "../interfaces/game-decision-interface"

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
} = {
    name: 'DARCH',
    continueGame: false,
    gameDecisionsData: null,
    currentPeriodIndex: 0,
    decisionPeriodIds: [],
    currentPeriodId: '',
    currentDecisionsPeriod: null,
    currentDecisionIndex: 0,
    decisionIds: [],
    currentDecisionId: ''
}

export const gameRouterLink: {routerLink: any} = {
    routerLink: null
}

export const servicioGraficaAC: {serviceArea: any} = {
    serviceArea: null
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


