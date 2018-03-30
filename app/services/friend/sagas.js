import { delay } from 'redux-saga';
import { all, call, fork, put, race, select, take, takeLatest, cancel } from 'redux-saga/effects';
import * as constants from './constants';

export function* initialFetchSagas(action) {
   yield put({
        type: constants.INITIAL_FRIEND_LIST,
        data: 'chinn'
    }); 
};

export function* watchFriendsList() {
	yield put({
		type: constants.INITIAL_FRIEND_LIST,
        data: constants.listArray
	});
    yield takeLatest(constants.FETCH_ACTION, initialFetchSagas);
};

export default function*() {
    yield all([
        fork(watchFriendsList)
    ]);
};