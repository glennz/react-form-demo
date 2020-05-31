import { IClaimForm } from "../shared/IClaimForm";
import ControlStateType from "../shared/ControlStateType";
import ControlDataType from "../shared/ControlDataType";
import DateOfBirthType from "../shared/DateOfBirthType";
import moment from "moment";

const initStateData = {touched: false, error: ''} as ControlStateType;

const initControlData = {value: ''} as ControlDataType;

// Initial State
const initialState: IClaimForm = { 
    firstName: initControlData,
    lastName: initControlData,
    email: initControlData,    
    dateOfBirth: { day: initControlData, month: initControlData, year: initControlData, date: null },
    description: initControlData,
    policyNo: initControlData,  
    stage: 1,
    isFormValid: true
};

const updateControlData = (payload: string) => {
    const init = {value: payload} as ControlDataType;
    return init;
};

const updateControlState = (error: string) => {
    const init = { touched: true, error: error} as ControlStateType;
    return init;
};

const parseDate = (dob: DateOfBirthType, dateFormats: Array<string>) =>  moment.utc(
    `${dob.day.value.trim()} ${dob.month.value.trim()} ${dob.year.value.trim()}`,
    dateFormats,
    true
);

export default {
    initStateData: initStateData,
    initControlData: initControlData,
    initialState: initialState,
    updateControlData: updateControlData,
    updateControlState: updateControlState,
    parseDate: parseDate,
};
