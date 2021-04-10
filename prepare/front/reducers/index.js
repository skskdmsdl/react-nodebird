import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';
import { combineReducers } from 'redux';

// action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data, 
//     }
// }

// (이전상태, 액션) => 다음상태
// 리듀서는 이전상태와 액션을 통해 다음상태를 만들어내는 함수
const rootReducer = combineReducers({
    // server side rendering을 위해 index 추가
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;