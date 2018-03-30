import * as constants from './constants';

export function initialFetchAction(friendList) {
    return {
        type: constants.FETCH_ACTION,
        data: friendList
    };
}