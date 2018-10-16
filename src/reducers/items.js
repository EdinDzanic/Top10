import { RECEIVE_ITEMS } from './../actions'

const items = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return [...action.results.slice(0, 10)];
        default:
            return state;
    }
}

export default items;