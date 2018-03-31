import * as constants from './constants';

export function initialFetchAction(friendList) {
    return {
        type: constants.FETCH_ACTION,
        listData: friendList
    };
}


export function addFetchAction(friendList, addData) {
    return {
        type: constants.ADD_FETCH_ACTION,
        listData: friendList,
        addData: addData
    };
}