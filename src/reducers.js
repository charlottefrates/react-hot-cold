import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODAL
} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showGame: false
};

export default (state, action) => {

    state = state || initialState;

    if (action.type === NEW_GAME) {
        console.log(initialState);
        console.log(state);
        return { ...initialState, correctAnswer: action.correctAnswer,showGame:true };
    }
    else if (action.type === MAKE_GUESS) {
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;

        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it RIGHT, YAY!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }
    else if (action.type === TOGGLE_INFO_MODAL) {
        alert(state.showGame);
        //Note: ... is called spread operator remember!
        console.log({...state, showGame: !state.showGame})
        return { ...state, showGame: !state.showGame }
        /*
         state = Object.assign({}, state, {
             showGame: !state.showGame
        });

        return state;
        */
    }
    return state;
};
