import {
    searchRequest,
    searchSuccess,
    searchFailure
} from '../actions/searchActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const films = handleAction(
    searchSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    searchFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions(
    {
        [searchRequest]: () => true,
        [searchSuccess]: () => false,
        [searchFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [searchRequest]: () => false,
        [searchSuccess]: () => true,
        [searchFailure]: () => true
    },
    false
);

export default combineReducers({
    error,
    films,
    isFetched,
    isFetching
});

export const getfilms = state => state.films;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
