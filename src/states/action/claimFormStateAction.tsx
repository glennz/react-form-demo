import { 
    SET_FIRST_NAME_STATE, 
    SET_LAST_NAME_STATE, 
    SET_EMAIL_STATE, 
    SET_POLICY_NO_STATE,
    SET_DATE_OF_BIRTH_STATE,
} from "./actions";
import ControlStateType from "../../shared/ControlStateType";

export const setFirstNameState = (payload: ControlStateType) => ({
    type: SET_FIRST_NAME_STATE,
    payload: payload,
});

export const setLastNameState = (payload: ControlStateType) => ({
    type: SET_LAST_NAME_STATE,
    payload: payload,
});

export const setEmailState = (payload: ControlStateType) => ({
    type: SET_EMAIL_STATE,
    payload: payload,
});

export const setPolicyNoState = (payload: ControlStateType) => ({
    type: SET_POLICY_NO_STATE,
    payload: payload,
});

export const setDateOfBirthState = (payload: ControlStateType) => ({
    type: SET_DATE_OF_BIRTH_STATE,
    payload: payload,
});