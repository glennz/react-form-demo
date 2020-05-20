import { IClaimForm } from "../shared/IClaimForm";
import ControlDataType from "../shared/ControlDataType";

const initControlData = {value: '', touched: false, error: ''} as ControlDataType;

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

const udpateControlData = (payload: string) => {
    const init = {value: payload, touched: true, error: ''} as ControlDataType;
    return init;
  };

const udpateControlDataDetails = (payload: string, error: string) => {
    const init = {value: payload, touched: true, error: error} as ControlDataType;
    return init;
};

export default {
    initControlData: initControlData,
    initialState: initialState,
    udpateControlData: udpateControlData,
    udpateControlDataDetails: udpateControlDataDetails
};
