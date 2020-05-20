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

// const initControlData: ControlDataType = {value: '', touched: false, error: ''};

const initControlData = utility.initControlData

const udpateControlData = utility.udpateControlData;

// Initial State
const initialState: IClaimForm = { 
  firstName: initControlData,
  lastName: initControlData,
  email: initControlData,    
  dateOfBirth: { day: initControlData, month: initControlData, year: initControlData },
  description: initControlData,
  policyNo: initControlData,  
  stage: 1,
  isFormValid: true
};

// Reducers (Modifies The State And Returns A New State)
const claimFormReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_FIRST_NAME: {
        const obj = udpateControlData(action.payload);
        return Object.assign({}, state, {
          firstName: obj
        });
      }
      case SET_LAST_NAME: {
        return Object.assign({}, state, {
          lastName: udpateControlData(action.payload)
        });
      }
      case SET_EMAIL: {
        return Object.assign({}, state, {
          email: udpateControlData(action.payload)
        });
      }
      case SET_POLICY_NO: {
        return Object.assign({}, state, {
          policyNo: udpateControlData(action.payload)
        });
      }
      case SET_DATE_OF_BIRTH: {
        const date = action.payload as DateOfBirthType;
        return Object.assign({}, state, {
          dateOfBirth: date
        });
      }
      case SET_DESCRIPTION: {
        return Object.assign({}, state, {
          description: udpateControlData(action.payload)
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