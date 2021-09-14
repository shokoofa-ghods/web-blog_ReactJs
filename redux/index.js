import { createStore,compose,applyMiddleware } from "redux";
import  createSagaMiddleware  from 'redux-saga'
import logger from 'redux-logger'
import reducers from './reducers'
import sagas from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware,logger]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
        // other store enhancers if any
      );

const store = createStore(
    reducers,
    enhancer
);

sagaMiddleware.run(sagas);

export default store