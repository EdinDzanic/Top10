import { MODES, TOGGLE_MODE } from './../actions';

const selectedMode = (state = MODES.TV, action) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return action.mode;
        default:
            return state;
    }
}

export default selectedMode;