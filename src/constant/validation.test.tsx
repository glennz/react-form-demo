import validation from './validation';
import DateOfBirthType from '../shared/DateOfBirthType';

describe('validation', () => {
    let dateOfBirth = {
        day: {value: ''}, 
        month: {value: ''}, 
        year: {value: ''}
    } as DateOfBirthType;

    it('should validate date of birth and get invalid date of birth message', () => {
        dateOfBirth.day.value = 'a';
        dateOfBirth.month.value = 'b';
        dateOfBirth.year.value = 'c';
        const error = validation.validateDateOfBirth(dateOfBirth, ['DD MM YYYY']);
        expect(error).toBe('Date of birth is invalid');

        dateOfBirth.day.value = '01';
        dateOfBirth.month.value = '01';
        dateOfBirth.year.value = '2000000';
        const error1 = validation.validateDateOfBirth(dateOfBirth, ['DD MM YYYY']);
        expect(error1).toBe('Date of birth is invalid');

        dateOfBirth.day.value = '32';
        dateOfBirth.month.value = '01';
        dateOfBirth.year.value = '2020';
        const error2 = validation.validateDateOfBirth(dateOfBirth, ['DD MM YYYY']);
        expect(error2).toBe('Date of birth is invalid');
    });

    it('should validate date of birth and get date of birth required', () => {
        const dateOfBirth1 = {
            day: {value: ''}, 
            month: {value: ''}, 
            year: {value: ''}
        } as DateOfBirthType;
        const error = validation.validateDateOfBirth(dateOfBirth1, ['DD MM YYYY']);
        expect(error).toBe('Date of birth is required');
    });

    it('should validate date of birth and get date of birth required', () => {
        dateOfBirth.day.value = '05';
        dateOfBirth.month.value = '12';
        dateOfBirth.year.value = '2020';
        const error = validation.validateDateOfBirth(dateOfBirth, ['DD MM YYYY']);
        expect(error).toBe('');
    });
});
