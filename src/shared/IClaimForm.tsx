import ControlDataType from './ControlDataType';
import DateOfBirthType from './DateOfBirthType';

export interface IClaimForm {
    firstName: ControlDataType,
    lastName: ControlDataType,
    email: ControlDataType,
    dateOfBirth: DateOfBirthType,
    description: ControlDataType,
    policyNo: ControlDataType,
    stage: number,
    isFormValid: boolean
};