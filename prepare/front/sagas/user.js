import { all, fork, takeLatest, put, delay } from 'redux-saga/effects'
import axios from 'axios';
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from '../reducers/user';

function logInAPI(data) {                   // *쓰면 에러남
    return axios.post('/api/login', data);    // 실제 서버에 요청 보냄
}

function* logIn(action) {
    try{
        // const result = yield call(logInAPI, action.data);    // call(함수, 함수에 들어가는 매개변수, 매개변수,...)
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
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
            type: LOG_OUT_SUCCESS,
            // data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI() {                  
    return axios.post('/api/logout');    
}

function* signUp() {
    try{
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);    // thunk의 비동기 actionCreator
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}