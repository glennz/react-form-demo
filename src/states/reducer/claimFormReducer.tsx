import { 
    SET_FIRST_NAME, 
    SET_LAST_NAME, 
    SET_EMAIL, 
    SET_POLICY_NO, 
    SET_DATE_OF_BIRTH, 
    SET_DESCRIPTION,
    SET_STAGE,
    SET_IS_FORM_VALID,
    CLEAR_FORM
} from "../action/actions";
import { IClaimForm } from '../../shared/IClaimForm';
import utility from '../../constant/ulitily';
import DateOfBirthType from "../../shared/DateOfBirthType";

const initControlData = utility.initControlData

// Initial State
const initialState: IClaimForm = { 
  firstName: initControlData,
  lastName: initControlData,
  email: initControlData,    
  dateOfBirth: { 
    day: initControlData, 
    month: initControlData, 
    year: initControlData,
    date: null 
  },
  description: initControlData,
  policyNo: initControlData,  
  stage: 1,
  isFormValid: true
};

// Reducers (Modifies The State And Returns A New State)
const claimFormReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_FIRST_NAME: {
        return Object.assign({}, state, {
          firstName: action.payload
        });
      }
      case SET_LAST_NAME: {
        return Object.assign({}, state, {
          lastName: action.payload
        });
      }
      case SET_EMAIL: {
        return Object.assign({}, state, {
          email: action.payload
        });
      }
      case SET_POLICY_NO: {
        return Object.assign({}, state, {
          policyNo: action.payload
        });
      }
      case SET_DATE_OF_BIRTH: {
        const dob = action.payload as DateOfBirthType;
        return Object.assign({}, state, {
          dateOfBirth: dob
        });
      }
      case SET_DESCRIPTION: {
        return Object.assign({}, state, {
          description: action.payload
        });
      }
      case SET_STAGE: {
        return Object.assign({}, state, {
          stage: action.payload
        });
      }
      case SET_IS_FORM_VALID: {
        return Object.assign({}, state, {
          isFormValid: action.payload
        });
      }
      case CLEAR_FORM: {
        return Object.assign({}, state, initialState);
      }
      // Default
      default: {
        return state;
      }
    }
  };
  // Exports
  export default claimFormReducer;