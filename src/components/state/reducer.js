import { types } from './types';

const initialState = {
  data: {
    role: [
    'shop_manager'
    ],
    cur: "$",
    time: 1,
    e_new: "",
    e_new_title: "",
    e_new_template: "",
    e_rem_title: "Reminder Title",
    e_rem_template: "<p>Hello <strong>world!</strong></p>",
    e_reg_title: "",
    e_reg_template: "",
  },
};

export const stateReducer = (state = initialState, action)=>{
  switch(action.type){
    case types.STATE_FILL: {
      return {
        ...state,
        data: action.payload,
      }
    }

    default: 
      return state
  }
}