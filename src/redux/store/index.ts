import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { RootState } from '../reducers';
import { DataActionTypes } from '../actions/types';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk as unknown as ThunkMiddleware<RootState, DataActionTypes>)
);

export default store;
