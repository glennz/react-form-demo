import { 
    SET_FIRST_NAME_STATE, 
    SET_LAST_NAME_STATE, 
    SET_EMAIL_STATE, 
    SET_POLICY_NO_STATE,
    SET_DATE_OF_BIRTH_STATE,
} from "../action/actions";
import utility from '../../constant/ulitily';

const initControlState = utility.initStateData;

// Initial State
const initialState = { 
  firstName: initControlState,
  lastName: initControlState,
  email: initControlState,
  policyNo: initControlState,  
  dateOfBirth: initControlState,
};

// Reducers (Modifies The State And Returns A New State)
const claimFormStateReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_FIRST_NAME_STATE: {
        return Object.assign({}, state, {
          firstName: action.payload
        });
      }
      case SET_LAST_NAME_STATE: {
        return Object.assign({}, state, {
          lastName: action.payload
        });
      }
      case SET_EMAIL_STATE: {
        return Object.assign({}, state, {
          email: action.payload
        });
      }
      case SET_POLICY_NO_STATE: {
        return Object.assign({}, state, {
          policyNo: action.payload
        });
      }   
      case SET_DATE_OF_BIRTH_STATE: {
        return Object.assign({}, state, {
          dateOfBirth: action.payload
        });
      }      
      // Default
      default: {
        return state;
      }
    }
  };
  // Exports
  export default claimFormStateReducer;