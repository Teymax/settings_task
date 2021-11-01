import { types } from './types';

const initialState = {
  data: {
    main: {
      name: 'Main',
      options: [
        { 
          title: 'Who can manage' ,
          description: 'Who can manage',
          value:  ['Select...', 'Select...2', 'Select...3', ]
        },
        { 
          title: 'Currency' ,
          description: 'Description here',
          value: ''
        },
        { 
          title: 'AM/PM time Fromat' ,
          description: 'AM/PM time Fromat',
          value: ''
        },
      ]
    },
    email: {
      name: 'Email',
      options: [
        { 
          title: 'Shortcaders' ,
          description: 'Description tor this',
          value: [
            {
              checked: false,
              name: 'New booking',
              title: 'New booking title',
              text: '<p>Hello&nbsp;<strong>world!</strong></p>',
            },
            {
              checked: false,
              name: 'Reminder',
              title: 'Reminder title',
              text: '<p>Hello&nbsp;<strong>world!</strong></p>',
            },
            {
              checked: false,
              name: 'Register',
              title: 'Register title',
              text: '<p>Hello&nbsp;<strong>world!</strong></p>',
            },
          ]
        },
      ]
    }
  }
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