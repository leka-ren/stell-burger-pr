import { combineReducers } from 'redux';
import { burgerReducers } from './burgerReducers';

export const rootReducer = combineReducers({
    dataBurger: burgerReducers,
  });