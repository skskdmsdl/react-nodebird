import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {                   // *쓰면 에러남
    return axios.post('/api/login', data);    // 실제 서버에 요청 보냄
}

function* logIn(action) {
    try{
        const result = yield call(logInAPI, action.data);    // call(함수, 함수에 들어가는 매개변수, 매개변수,...)
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}

function logOutAPI() {                  
    return axios.post('/api/logout');    
}

function* logOut() {
    try{
        const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {                  
    return axios.post('/api/post', data);    
}

function* addPost(action) {
    try{
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield take('LOG_IN_REQUEST', logIn);    // thunk의 비동기 actionCreator
}

function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([             // 동시에 실행
        fork(watchLogIn),   // fork나 call로 generator함수를 실행해 줌
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}