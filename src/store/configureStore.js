import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from '../enhancers/monitorReducer';
import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers/index';

export default function configureStore(preloadedState) {
  const middlewares = [
    loggerMiddleware,
    // thunkMiddleware
    thunkMiddleware.withExtraArgument(getFirebase),
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
