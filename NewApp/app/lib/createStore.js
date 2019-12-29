import { createStore , combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'

import rootSagas from '../sagas';
import userReducer from '../reducers/userReducer'

const sagaMiddleWare = createSagaMiddleware();
let middleWare = applyMiddleware(sagaMiddleWare);

const rootReducers = combineReducers({
    user : userReducer
});
const composeEnhancers = typeof window === 'object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({  }) : compose;

const store = createStore(rootReducers,composeEnhancers(middleWare));

sagaMiddleWare.run(rootSagas);

export default store;
