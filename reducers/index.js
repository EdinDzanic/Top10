import { combineReducers } from 'redux'

import { MODES } from '../actions'

const mode = (state = MODES.TV, action) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return state === MODES.TV ? MODES.MOVIE : MODES.TV;  
        default:
            return state;
    }
}

export default combineReducers(
    mode
)