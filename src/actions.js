
export const NEW_GAME = 'NEW_GAME';

export const newGame = () => ({
    type: NEW_GAME,
    correctAnswer: Math.round(Math.random() * 100),
});

export const MAKE_GUESS = 'MAKE_GUESS';

export const makeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
});

//got from results
export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const togglegame = () => ({
    type: TOGGLE_INFO_MODAL
});
