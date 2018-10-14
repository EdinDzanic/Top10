export const toggleMode = mode => ({
    type: 'TOGGLE_MODE',
    mode
})

export const MODES = {
    TV: 'tv',
    MOVIE: 'movie'
}

export const REQUEST_DISCOVER = 'REQUEST_DISCOVER';

export const requestDiscover = mode => ({
    type: REQUEST_DISCOVER,
    mode
})

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';

export const receiveItems = (json) => ({
    type: RECEIVE_ITEMS,
    results: json.results
})

export const receiveItem = (json) => ({
    type: RECEIVE_ITEM,
    result: json
})

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "0f8d1d68f8bf3686a90705531714ccf8";

function fetchItems(mode, type) {
    return function (dispatch) {
        dispatch(requestDiscover(mode));

        const url = `${API_URL}${type}/${mode}?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=100`;

        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveItems(json)));
    }
}

export function discoverItems(mode) {
    return fetchItems(mode, 'discover');
}

export function searchItems(mode, query) {
    return function (dispatch) {
        dispatch(requestDiscover(mode));

        const url = `${API_URL}search/${mode}?api_key=${API_KEY}&query=${query}&sort_by=vote_average.desc&vote_count.gte=100`;

        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveItems(json)));
    }
}

export const CHANGE_SAERCH_QUERY = 'CHANGE_SAERCH_QUERY';

export function changeSearchQuery(query) {
    return {
        type: CHANGE_SAERCH_QUERY,
        query
    }
}

export const CHANGE_VIEW = {
    type: 'CHANGE_VIEW'
}

export function getItem(mode, id) {
    return function (dispatch) {
        dispatch(requestDiscover(mode));

        const url = `${API_URL}${mode}/${id}?api_key=${API_KEY}`;

        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveItem(json)));
    }
}

export const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';

export function setSelectedItem(id) {
    return {
        type: SET_SELECTED_ITEM,
        id
    }
}

export function displayItem(id) {
    return function(dispatch) {
        dispatch(setSelectedItem(id))
        dispatch(CHANGE_VIEW)
    }
}