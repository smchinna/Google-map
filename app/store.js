import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';
import sagas from './sagas';

export function configureStore(initialState, history) {
    const reduxRouterMiddleware = routerMiddleware(history);
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [ reduxRouterMiddleware, sagaMiddleware ];
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware)));

    sagas.forEach(saga => sagaMiddleware.run(saga));

    // Setup hot reload
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}