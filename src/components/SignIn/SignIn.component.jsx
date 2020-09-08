import React from 'react';

import { FormInput } from './../FormInput/FormInput.component';
import { useFormValidation } from './../../shared/utils/useFormValidation';
import { auth } from './../../firebase/firebaseConfig';
import { Button } from './../Button/Button.component';

import './SignIn.styles.css';

import FormFieldsData from './../../shared/data/form-fields';

const SignIn = () => {

    // FORM INITIAL STATE

    const formInitialState = {
        userEmail: '',
        userPassword: ''
    };

    // SETTING VALIDATION RULES FOR FORM FIELDS

    const fieldValidationRules = {
        userEmail: { required: true, isValidEmail: true },
        userPassword: { required: true}
    };

    // METHOD TO HANDLE FORM SUBMIT

    const handleFormSubmit = async event => {
        try {
            const userLoggedInData = await auth.signInWithEmailAndPassword(userEmail, userPassword);

            console.log(userLoggedInData);
        } catch(err) {
            console.log(err);
        }
    }

    // INITIALIZING FORM USING HOOK

    const [
        signInFormState,
        errors,
        touched,
        dirty,
        isValid,
        handleInputChange,
        handleSubmit,
        handleBlur,
        handleFocus
    ] = useFormValidation(formInitialState, fieldValidationRules, handleFormSubmit);

    const { userEmail, userPassword } = signInFormState;

    return(
        <div className = 'SignInSection'>

            <h1> Sign In here..!! </h1>

            <form onSubmit = {handleSubmit} >

                <FormInput 
                    {...FormFieldsData.userEmail}
                    value = {userEmail} 
                    haveValidationError = { touched?.userEmail
                                            && dirty?.userEmail
                                            && errors?.userEmail
                                            && Object.keys(errors?.userEmail).length > 0 ? true : false }
                    clicked = {handleInputChange}
                    blur = {handleBlur}
                    focus = {handleFocus} />

                    {/* Validation Error Message */}

                    { touched?.userEmail
                      && dirty?.userEmail
                      && errors?.userEmail?.required ? 
                        <p className = 'ValidationErrorMessage'> Email is required </p> 
                        : null 
                    }

                    { touched?.userEmail
                      && dirty?.userEmail
                      && errors?.userEmail?.email ? 
                        <p className = 'ValidationErrorMessage'> Invalid Email </p> 
                        : null 
                    }

                <FormInput 
                    {...FormFieldsData.userPassword}
                    value = {userPassword}
                    haveValidationError = { touched?.userPassword
                                            && dirty?.userPassword
                                            && errors?.userPassword && Object.keys(errors?.userPassword).length > 0 ? true : false }
                    clicked = {handleInputChange}
                    blur = {handleBlur}
                    focus = {handleFocus} />

                    {/* Validation Error Message */}

                    { touched?.userPassword
                      && dirty?.userPassword
                      && errors?.userPassword?.required ? 
                        <p className = 'ValidationErrorMessage'> Password is required </p> 
                        : null 
                    }
                
                <Button
                    type = 'submit'
                    btn_label = 'Login'
                    btn_size = 'sm'
                    disabled = {!isValid}
                    btn_bg = '#00ACEE'
                    btn_color = '#FFFFFF' />

                <Button
                    type = 'button'
                    btn_label = 'Cancel'
                    btn_size = 'sm'
                    btn_bg = '#4b4b4b'
                    btn_color = '#FFFFFF' />

            </form>

        </div>
    )
};

export { SignIn };