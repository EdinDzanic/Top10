import { combineReducers } from 'redux'

import { MODES } from './../actions'

const mode = (state = MODES.TV, action) => {
    switch (action.type) {
        case 'TOGGLE_MODE':
            return action.mode;  
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    mode
});

export default rootReducer;