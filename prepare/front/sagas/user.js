import { all, fork, takeLatest, put, delay } from 'redux-saga/effects'
import axios from 'axios';

function logInAPI(data) {                   // *쓰면 에러남
    return axios.post('/api/login', data);    // 실제 서버에 요청 보냄
}

function* logIn(action) {
    try{
        // const result = yield call(logInAPI, action.data);    // call(함수, 함수에 들어가는 매개변수, 매개변수,...)
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            // data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            // data: err.response.data,
        });
    }
}

function logOutAPI() {                  
    return axios.post('/api/logout');    
}

function* logOut() {
    try{
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            // data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            // data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);    // thunk의 비동기 actionCreator
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}