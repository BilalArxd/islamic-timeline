// Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
	key: 'root',
	storage: storage,
	stateReconciler: autoMergeLevel2,
	blacklist: [ 'timeline', 'home' ]
};
// const persistedReducer = persistReducer(persistConfig, reducer);
const debug = false;
const middleware = debug ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
export const store = createStore(reducer, middleware);
//export const persistor = persistStore(store);
