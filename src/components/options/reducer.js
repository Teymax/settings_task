import { types } from './types';
import { options } from '../../options'

const initialState = {
  data: {options}
};

export const optionsReducer = (state = initialState, action)=>{
  switch(action.type){
    case types.OPTIONS_FILL: {
      return {
        ...state,
        data: action.payload,
      }
    }

    default: 
      return state
  }
}