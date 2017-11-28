import {
    serialFetchRequest,
    serialFetchSuccess,
    serialFetchFailure
} from '../actions/searcActions';
import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

const episodes = handleAction(
    serialFetchSuccess,
    (state, action) => action.payload,
    []
);

const error = handleAction(
    serialFetchFailure,
    (state, action) => action.error,
    null
);

const isFetching = handleActions(
    {
        [serialFetchRequest]: () => true,
        [serialFfetcsSuccess]: () => false,
        [serialFetchFailure]: () => false
    },
    false
);

const isFetched = handleActions(
    {
        [serialFetchRequest]: () => false,
        [serialFfetcsSuccess]: () => true,
        [serialFetchFailure]: () => true
    },
    false
);

export default combineReducers({
    error,
    episodes,
    isFetched,
    isFetching
});

export const getEpisodes = state => state.episodes;
export const getIsFetching = state => state.isFetching;
export const getIsFetched = state => state.isFetched;
export const getError = state => state.error;
