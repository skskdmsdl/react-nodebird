export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'kimgo',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg',
        }, {
            src: 'https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg',
        }, {
            src: 'https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_960_720.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nimo',
            },
            content: '냐옹',
        }, {
            User: {
                nickname: 'dori',
            },
            content: '캭',
        }],
        imagePaths: [],
        postAdded: false,
    }],
}

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: 'kimgo'
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],     // 앞에 추가를 해줘야 게시글 위에 올라감
                postAdded: true,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;