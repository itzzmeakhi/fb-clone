const validations = (fieldValue, validationsToPerform) => {

    const errorsOccurred = {};
    const value = String(fieldValue);
    const actualLength = value.length;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    // Validation Rule for checking for null values

    if(validationsToPerform.required && !value) {
        errorsOccurred.required = true;
    }

    // Validation Rule for checking for an Valid Email

    if(validationsToPerform.isValidEmail && value && !emailRegex.test(value.toLowerCase())) {
        errorsOccurred.email = true;
    }

    // Validation Rule for checking Minimum Length

    if(validationsToPerform.minLength && value && !(actualLength >= validationsToPerform['minLength'])) {
        errorsOccurred.minlength = { 'requiredLength': validationsToPerform['minLength'], 'actualLength': actualLength };
    }

    // Validation Rule for checking Maximum Length

    if(validationsToPerform.maxLength && value && !(actualLength >= validationsToPerform['maxLength'])) {
        errorsOccurred.maxlength = { 'requiredLength': validationsToPerform['maxLength'], 'actualLength': actualLength };
    }

    // Validation Rule for checking an Valid Mobile number

    if(validationsToPerform.isValidMobileNumber && value && !mobileRegex.test(value)) {
        errorsOccurred.mobile = true;
    }

    // Validation Rule for checking Password Strength

    if(validationsToPerform.passwordStrength && value) {
        let hasNumbers = !(/\d/.test(value));
        let hasLowerCase = !(/[a-z]/.test(value));
        let hasUpperCase = !(/[A-Z]/.test(value));
        let hasSpecialSymbols = !(/[.,!@#]/.test(value));
        let hasMinimumLength = !(value.length >= 8);

        if(hasNumbers || hasLowerCase || hasUpperCase || hasSpecialSymbols || hasMinimumLength) {
            errorsOccurred.weak = {
                hasNumbers,
                hasLowerCase,
                hasUpperCase,
                hasSpecialSymbols,
                hasMinimumLength
            };
        }
    }

    // Validation Rule for checking validity of Birthdate

    if(validationsToPerform.isValidDate && value) {
        let birthYear = +(value).slice(0, 4);
        let birthMonth = +(value).slice(5,7);
        let birthDate = +(value).slice(8, 10);
        let invalidDate = false;
        let isLeapYear = false;

        if(birthYear > 1900 && birthYear <= new Date().getFullYear()) {
            if(birthYear % 400 === 0) {
                isLeapYear = true;
            } 
            if(birthYear % 100 === 0) {
                isLeapYear = false;
            }
            if(birthYear % 4 === 0) {
                isLeapYear = true;
            }
        } else {
            invalidDate = true;
        }

        if(birthMonth >= 1 && birthMonth <= 12) {
            if(birthMonth === 1 || birthMonth === 3 || birthMonth === 5 || birthMonth === 7 || birthMonth === 8 || birthMonth === 10 || birthMonth === 12) {
                if(birthDate > 31 || birthDate < 0) {
                    invalidDate = true;
                }
            }
            if(birthMonth === 4 || birthMonth === 6 || birthMonth === 9 || birthMonth === 11) {
                if(birthDate > 30 || birthDate < 0) {
                    invalidDate = true;
                }
            }
            if(birthMonth === 2 && isLeapYear) {
                if(birthDate > 29 || birthDate < 0) {
                    invalidDate = true;
                }
            }
            if(birthMonth === 2 && !isLeapYear) {
                if(birthDate > 28 || birthDate < 0) {
                    invalidDate = true;
                }
            }
        } else {
            invalidDate = true;
        }

        if(invalidDate) {
            errorsOccurred.date = true;
        }
    }

    // Validation Rule for checking whether password's are matched or not

    if(validationsToPerform.passwordsMatch && value) {
        const passwordValues = value.split(',');
        // [0]Confirm Password !=== [1]Password
  
        if(passwordValues[0] !== passwordValues[1]) {
            errorsOccurred.match = true;
        }
    }

    // Validation Rule for checking the boolean value

    if(validationsToPerform.boolEqualTo && value && (value !== validationsToPerform['boolEqualTo'])) {
        errorsOccurred.checked = true;
    }

    return errorsOccurred;
};

export { validations };