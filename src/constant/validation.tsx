import moment from 'moment';
import DateOfBirthType from '../shared/DateOfBirthType';

const controls = {
    FIRST_NAME: { name: 'firstName', validationRules: [{required: true}] },
    LAST_NAME: { name: 'lastName', validationRules: [{required: true}] },
    EMAIL: { name: 'email', validationRules: [{required: true}, {validEmail: true}] },
    POLICY_NO: { name: 'policyNo', validationRules: [{required: true}] },
    DESCRIPTION: { name: 'description', validationRules: [{required: false}] },
    DATE_OF_BIRTH: { name: 'dateOfBirth', validationRules: [{required: false}, {validDate: true}] }
};

const validateEmail = (emailAddress: string) => {
    const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(emailAddress);
};

const validateDate = (date: string) => {
    const dateParsed = moment.utc(
        date,
        ['D M YYYY', 'D MMM YYYY', 'D MMMM YYYY'],
        true
    );
    return dateParsed.isValid();
};

const hasRequired = (rules: Array<any>) => {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].required) {
            return true;
        }
    }
    return false;
}

const hasValidEmail = (rules: Array<any>) => {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].validEmail) {
            return true;
        }
    }
    return false;
}

const hasValidDate = (rules: Array<any>) => {
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].validDate) {
            return true;
        }
    }
    return false;
}

const validateControl = (controlName: string, value: any) => {
    const cname = controlName.toLocaleLowerCase();
    switch(cname) {
        case controls.FIRST_NAME.name.toLocaleLowerCase():
            if (hasRequired(controls.FIRST_NAME.validationRules)) {
                if (!value) {
                    return 'First name is required';
                }
            }
            return '';
        case controls.LAST_NAME.name.toLocaleLowerCase():
            if (hasRequired(controls.LAST_NAME.validationRules)) {
                if (!value) {
                    return 'Last name is required';
                }
            }
            return '';
        case controls.EMAIL.name.toLocaleLowerCase():
            if (hasRequired(controls.EMAIL.validationRules)) {
                if (!value) {
                    return 'Last name is required';
                }
            }
            if (hasValidEmail(controls.EMAIL.validationRules)) {
                if (!validateEmail(value)) {
                    return 'Email is invalid';
                }
            }
            return '';
        case controls.POLICY_NO.name.toLocaleLowerCase():
            if (hasRequired(controls.POLICY_NO.validationRules)) {
                if (!value) {
                    return 'Policy no is required';
                }
            }
            return '';
        case controls.DESCRIPTION.name.toLocaleLowerCase():
            if (hasRequired(controls.DESCRIPTION.validationRules)) {
                if (!value) {
                    return 'Description is required';
                }
            }
            return '';
        case controls.DATE_OF_BIRTH.name.toLocaleLowerCase():
            if (hasRequired(controls.DATE_OF_BIRTH.validationRules)) {
                if (!value) {
                    return 'Date of birth is required';
                }
            }
            if (hasValidDate(controls.DATE_OF_BIRTH.validationRules)) {
                if (!validateDate(value)) {
                    return 'Invalid date';
                }
            }
            return '';
    }
};

const validateDateOfBirth = (dob: DateOfBirthType, dateFormats: Array<string>) => {
    if (!dob.day || !dob.day.value || !dob.month || !dob.month.value || !dob.year || !dob.year.value) {
      return 'Date of birth is required';
    }
    
    const dateParsed = moment.utc(
      `${dob.day.value.trim()} ${dob.month.value.trim()} ${dob.year.value.trim()}`,
      dateFormats,
      true
    );

    return dateParsed.isValid() ? '' : 'Date of birth is invalid';
};

export default {
    validateControl: validateControl,
    validateDateOfBirth: validateDateOfBirth,
};
