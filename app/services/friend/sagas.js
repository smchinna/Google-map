import { delay } from 'redux-saga';
import { all, call, fork, put, race, select, take, takeLatest, cancel } from 'redux-saga/effects';


export function* watchFriendsList() {
    yield put({
       type: 'INITIAL',
       data: 'chinns' 
    });
}

export default function*() {
    yield all([
        fork(watchFriendsList)
    ]);
}