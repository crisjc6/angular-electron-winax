"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameStatus = exports.servicioPuntajes = exports.servicioGraficaAC = exports.gameRouterLink = exports.GameSpecifications = void 0;
exports.GameSpecifications = {
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
};
exports.gameRouterLink = {
    routerLink: null
};
exports.servicioGraficaAC = {
    serviceArea: null
};
exports.servicioPuntajes = {
    serviceScore: null
};
exports.gameStatus = {
    status: 'mainScene',
    conectionStatus: false,
    gameMusic: null,
    isMusicPlaying: false,
    isSoundMuted: true,
};
//# sourceMappingURL=game-system-specifications.js.map