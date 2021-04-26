import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import hospitalsReducer from '../reducers/hospitals';
import profileReducer from '../reducers/profile';
import profilesReducer from '../reducers/profiles';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      hospitals: hospitalsReducer,
      profile: profileReducer,
      profiles: profilesReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
