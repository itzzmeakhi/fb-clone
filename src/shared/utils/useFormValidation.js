import { useState, useEffect } from 'react';

import { validations } from './validationRules';

const useFormValidation = ( INITIAL_STATE, validationRules, handleFormSubmit ) => {
    const [values, setValues] = useState(INITIAL_STATE);
    const [touched, setTouched] = useState({});
    const [dirty, setDirty] = useState({});
    const [formValidity, setValidity] = useState(false);
    const [errors, setErrors] = useState(validationRules);

    // METHOD TO CHECK FOR ERRORS ON INDIVIDUAL FIELDS

    const checkForErrors = ({name, value, type, checked}) => {
        let passwordMatch = false;
        let valuesMatch = [];
        let field = null;

        // HANDLING PASSWORDS

        // 1) Password is typed and confirm password is null
        // 2) Password is null and confirm password is typed
        // 3) Password remains same, confirm password is modified
        // 4) Password is modified, confirm password remains same

        if(name === 'userConfirmPassword' && values.userPassword) {
            value = [value, values.userPassword];
        }
        if(name === 'userPassword' && values.userConfirmPassword) {
            valuesMatch = [values.userConfirmPassword, value];
            field = 'userConfirmPassword';
            passwordMatch = true;
        }
        setErrors(
            passwordMatch ? {
                ...errors,
                [name]: validations(value, validationRules[name]),
                [field]: validations(valuesMatch, validationRules[field])
            } : (type === 'checkbox' ? {
                ...errors,
                [name]: validations(checked, validationRules[name]) 
            } : {
                ...errors,
                [name]: validations(value, validationRules[name])   
            })
        )
    }

    // METHOD TO CHECK VALIDITY OF ENTIRE FORM

    useEffect(() => {
        let formValidity = true;
        const keys = Object.keys(errors);

        keys.forEach(key => {
            if(Object.keys(errors[key]).length !== 0) {
                formValidity = false;
            }
        });
        setValidity(formValidity);
    }, [errors]);

    // METHOD TO HANDLE INPUT FIELD VALUE CHANGE

    const handleChange = event => {
        const { name, value, checked, type } = event.target;

        if(type === 'checkbox') {
            setValues({
                ...values,
                [name]: checked 
            })
        } else {
            setValues({
                ...values,
                [name]: value
            });
        } 

        checkForErrors({ name, value , type, checked });
    }

    // METHOD TO HANDLE FIELD VALIDATION on onFocus event

    const handleFocus = event => {
        let { name } = event.target;
        if(touched?.[name] !== true) {
            setTouched({
                ...touched,
                [name]: true
            });
        }
    }

    // METHOD TO HANDLE FIELD VALIDATION on onBlur event

    const handleBlur = event => {
        let { name } = event.target;


        if(dirty?.[name] !== true) {
            setDirty({
                ...dirty,
                [name]: true
            });
        }

        checkForErrors(event.target);
    }

    // METHOD TO HANDLE FORM SUBMISSION

    const handleSubmit = event => {
        event.preventDefault();
        handleFormSubmit();
    }


    return [ 
            values,
            errors, 
            touched, 
            dirty, 
            formValidity, 
            handleChange, 
            handleSubmit, 
            handleBlur, 
            handleFocus ];
};

export { useFormValidation };