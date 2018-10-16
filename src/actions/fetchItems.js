import {
    RECEIVE_ITEMS,
    RECEIVE_ITEM,
    REQUEST_FETCH
} from './constants';

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "0f8d1d68f8bf3686a90705531714ccf8";

export const requestFetch = mode => ({
    type: REQUEST_FETCH,
    mode
})

export const receiveItems = (json) => ({
    type: RECEIVE_ITEMS,
    results: json.results
})

export const receiveItem = (json) => ({
    type: RECEIVE_ITEM,
    result: json
})

export function fetchItems(mode) {
    return function (dispatch) {
        dispatch(requestFetch(mode));

        const url = `${API_URL}${mode}/top_rated?api_key=${API_KEY}`;

        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveItems(json)));
    }
}

export function searchItems(mode, query) {
    return function (dispatch) {
        dispatch(requestFetch(mode));

        const url = `${API_URL}search/${mode}?api_key=${API_KEY}&query=${query}&sort_by=vote_average.desc&vote_count.gte=100`;

        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveItems(json)));
    }
}

export function getItem(mode, id) {
    return function (dispatch) {
        dispatch(requestFetch(mode));

        const url = `${API_URL}${mode}/${id}?api_key=${API_KEY}&&append_to_response=videos`;

        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(receiveItem(json)));
    }
}