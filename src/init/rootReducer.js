import { combineReducers } from 'redux';

import { optionsReducer as options } from '../components/options/reducer';
import { stateReducer as state } from '../components/state/reducer'

export const rootReducer = combineReducers({
  options,
  state,
})