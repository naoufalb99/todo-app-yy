import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import todosReducer from './todos';

const reducers = combineReducers({
    todos: todosReducer,
});

const persistedReducer = persistReducer({ key: 'todo-app', storage }, reducers);

export const configureStore = (initialState = {}) => {
    const middlewares = [];
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(
        persistedReducer,
        initialState,
        compose(...enhancers)
    );
    const persistor = persistStore(store);

    return { store, persistor };
};
