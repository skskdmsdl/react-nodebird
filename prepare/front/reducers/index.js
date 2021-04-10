const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

// action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data, 
//     }
// }

// (이전상태, 액션) => 다음상태
// 리듀서는 이전상태와 액션을 통해 다음상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
    }
};

export default rootReducer;