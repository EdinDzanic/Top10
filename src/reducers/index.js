import { combineReducers } from 'redux'

import selectedMode from './selectedMode';
import items from './items';
import searchQuery from './searchQuery';
import isListView from './isListView';
import selectedId from './selectedId';
import selectedItem from './selectedItem';
import isLoading from './isLoading';

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