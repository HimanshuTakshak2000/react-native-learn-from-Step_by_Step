import { put, takeEvery } from 'redux-saga/effects';
import { USER_LIST, SET_USER_LIST_DATA } from './constant';

function* userList() {
    // console.warn("saga list is shown");
    // console.log("saga list is shown");
    const url = "https://dummyjson.com/users";
    let data = yield fetch(url);
    data = yield data.json();
    // console.log("data :- ", data);
    yield put({type:SET_USER_LIST_DATA, data});
}

function* sagaData() {
    yield takeEvery(USER_LIST, userList)
}

export default sagaData;

// https://dummyjson.com/users