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
} from "./actions";
import DateOfBirthType from '../../shared/DateOfBirthType';
import ControlDataType from "../../shared/ControlDataType";

export const setFirstName = (payload: ControlDataType) => ({
    type: SET_FIRST_NAME,
    payload: payload,
});

export const setLastName = (payload: ControlDataType) => ({
    type: SET_LAST_NAME,
    payload: payload,
});

export const setEmail = (payload: ControlDataType) => ({
    type: SET_EMAIL,
    payload: payload,
});

export const setPolicyNo = (payload: ControlDataType) => ({
    type: SET_POLICY_NO,
    payload: payload,
});

export const setDateOfBirth = (payload: DateOfBirthType) => ({
    type: SET_DATE_OF_BIRTH,
    payload: payload,
});

export const setDescription = (payload: ControlDataType) => ({
    type: SET_DESCRIPTION,
    payload: payload,
});

export const setStage = (payload: number) => ({
    type: SET_STAGE,
    payload: payload,
});

export const setIsFormValid = (payload: boolean) => ({
    type: SET_IS_FORM_VALID,
    payload: payload,
});

export const clearForm = () => ({
    type: CLEAR_FORM
});