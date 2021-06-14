import { DecisionInterface, GameDecisionInterface } from "../interfaces/game-decision-interface"
import { GameScoreDataInterface } from "../interfaces/game-score-interface"

export const GameSpecifications:{
    name: string;
    continueGame: boolean;
    gameDecisionsData: GameDecisionInterface[];
    currentPeriodIndex: number;
    decisionPeriodIds: string[];
    currentPeriodId: string;
    currentDecisionsPeriod: GameDecisionInterface; //Corregir o aumentar el data de cada decicion debe ser: Periodo-Decicion-Opcion
    currentDecisionIndex: number;
    // currentDecision: DecisionInterface; //Corregir o aumentar el data de cada decicion debe ser: Periodo-Decicion-Opcion
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
    // currentDecision: null,
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

export const playerData: GameScoreDataInterface = {
    id: 0,
    score: 0,
    teamName: 'crisweb.me'
}


