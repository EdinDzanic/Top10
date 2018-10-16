import { REQUEST_FETCH, RECEIVE_ITEMS, RECEIVE_ITEM } from './../actions';

const isLoading = (state = false, action) => {
    switch (action.type) {
        case REQUEST_FETCH:
            return true;
        case RECEIVE_ITEM:
        case RECEIVE_ITEMS:
            return false;
        default:
            return state;
    }
}

export default isLoading;