import DateOfBirthType from './DateOfBirthType';

type DateOfBirthPropsType = {
    id: string, 
    name: string, 
    label?: string,
    dateOfBirth: DateOfBirthType   
    dateFormat: string, //au or usa 
    touched?: boolean,
    error?: string,
    setTouched?: any, 
    setValue?: any,
};

export default DateOfBirthPropsType;