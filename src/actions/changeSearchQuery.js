import { CHANGE_SAERCH_QUERY } from './constants';

export function changeSearchQuery(query) {
    return {
        type: CHANGE_SAERCH_QUERY,
        query
    }
}