import { SET_SELECTED_ITEM } from './constants';

export const CHANGE_VIEW = {
    type: 'CHANGE_VIEW'
}

export function setSelectedItem(id) {
    return {
        type: SET_SELECTED_ITEM,
        id
    }
}

export function displayItem(id) {
    return function (dispatch) {
        dispatch(setSelectedItem(id))
        dispatch(CHANGE_VIEW)
    }
}