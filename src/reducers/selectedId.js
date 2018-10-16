import { SET_SELECTED_ITEM } from './../actions';

const selectedId = (state = 0, action) => {
    switch (action.type) {
        case SET_SELECTED_ITEM:
            return action.id;
        default:
            return state;
    }
}

export default selectedId;