import { createWrapper } from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

// action을 실행하기 전에 console.log를 찍어주는 middleware
// redux-devtools를 대체 할 수 있음
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
  };

const configureStore = (context) => {
    console.log(context);
    const middlewares = [thunkMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
        applyMiddleware(...middlewares),
    );
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;