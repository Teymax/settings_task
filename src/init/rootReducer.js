import { combineReducers } from 'redux';

import { optionsReducer as options } from '../components/reducer';


export const rootReducer = combineReducers({
  options,
})