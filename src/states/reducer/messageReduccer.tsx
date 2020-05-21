import { 
    SET_FORM_MESSAGE
} from "../action/actions";

const initialState = { 
    formMessage: ''
};

// Reducers (Modifies The State And Returns A New State)
const messageReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_FORM_MESSAGE: {
        return Object.assign({}, state, {
          formMessage: action.payload
        });
      }      
      // Default
      default: {
        return state;
      }
    }
  };
  // Exports
  export default messageReducer;