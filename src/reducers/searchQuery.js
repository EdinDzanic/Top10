import { CHANGE_SAERCH_QUERY } from './../actions';

const searchQuery = (state = '', action) => {
    switch (action.type) {
        case CHANGE_SAERCH_QUERY:
            return action.query;
        default:
            return state;
    }
}

export default searchQuery;