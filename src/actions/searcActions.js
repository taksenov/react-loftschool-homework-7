import { createActions } from 'redux-actions';

export const {
    serial: {
        fetchRequest: fetchFireFlyEpisodsRequest,
        fetchSuccess: fetchFireFlyEpisodsSuccess,
        fetchFailure: fetchFireFlyEpisodsFailure
    }
} = createActions({
    SERIAL: {
        FETCH_REQUEST: undefined,

        FETCH_SUCCESS: [
            episods => episods,
            episods => ({ length: episods.length })
        ],

        FETCH_FAILURE: undefined
    }
});
