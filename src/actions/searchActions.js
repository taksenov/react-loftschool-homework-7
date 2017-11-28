import { createActions } from 'redux-actions';

export const {
    search: {
        Request: searchRequest,
        Success: searchSuccess,
        Failure: searchFailure
    }
} = createActions({
    SEARCH: {
        REQUEST: undefined,

        SUCCESS: [episods => episods, episods => ({ length: episods.length })],

        FAILURE: undefined
    }
});
