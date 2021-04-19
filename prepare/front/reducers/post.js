import shortId from 'shortid';

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
        addPostLoading: false,
        addPostDone: false,
        addPostError: null,
        addCommentLoading: false,
        addCommentDone: false,
        addCommentError: null,
    }],
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'kimgo'
    },
    Images: [],
    Comments: [],
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'kimgo'
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'kimgo'
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST: 
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS: 
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],     // 앞에 추가를 해줘야 게시글 위에 올라감
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE: 
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case ADD_COMMENT_REQUEST: 
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = { ...state.mainPosts[postIndex] };
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE: 
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;