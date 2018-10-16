import { combineReducers } from 'redux'

import {
    MODES,
    REQUEST_FETCH,
    RECEIVE_ITEMS,
    CHANGE_SAERCH_QUERY,
    SET_SELECTED_ITEM,
    RECEIVE_ITEM,
    TOGGLE_MODE
}
from './../actions';

const selectedMode = (state = MODES.TV, action) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return action.mode;
        default:
            return state;
    }
}

const items = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return [...action.results.slice(0, 10)];
        default:
            return state;
    }
}

const searchQuery = (state = '', action) => {
    switch (action.type) {
        case CHANGE_SAERCH_QUERY:
            return action.query;
        default:
            return state;
    }
}

const isListView = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return !state;
        default:
            return state;
    }
}

const selectedId = (state = 0, action) => {
    switch (action.type) {
        case SET_SELECTED_ITEM:
            return action.id;
        default:
            return state;
    }
}

const selectedItem = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ITEM:
            return action.result;
        default:
            return state;
    }
}

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

const rootReducer = combineReducers({
    selectedMode,
    items,
    searchQuery,
    isListView,
    selectedId,
    selectedItem,
    isLoading
});

export default rootReducer;