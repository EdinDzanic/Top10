import { RECEIVE_ITEM } from './../actions';

const selectedItem = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ITEM:
            return action.result;
        default:
            return state;
    }
}

export default selectedItem;