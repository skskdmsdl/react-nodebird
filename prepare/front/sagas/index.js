import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([             // 동시에 실행
        fork(postSaga),   // fork나 call로 generator함수를 실행해 줌
        fork(userSaga),
    ]);
}