import React from 'react';

import { FormInput } from './../FormInput/FormInput.component';
import { useFormValidation } from './../../shared/utils/useFormValidation';
import { auth, createUserProfileDocument } from './../../firebase/firebaseConfig';
import { Button } from './../Button/Button.component';

import './SignUp.styles.css';

import FormFieldsData from './../../shared/data/form-fields';

const SignUp = () => {

    // FORM INITIAL STATE

    const formInitialState = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        userDOB: '',
        userContactNumber: '',
        userGender: '',
        userTermsAcceptance: false
    };

    // SETTING VALIDATION RULES FOR FORM FIELDS

    const fieldValidationRules = {
        userName: { required: true, minLength: '5' },
        userEmail: { required: true, isValidEmail: true },
        userPassword: { required: true, passwordStrength: true },
        userConfirmPassword: { required: true, passwordsMatch: true },
        userDOB: { required: true, isValidDate: true },
        userContactNumber: { required: true, isValidMobileNumber: true },
        userGender: { required: true },
        userTermsAcceptance: { boolEqualTo: 'true' }
    };

    // METHOD TO HANDLE FORM SUBMIT

    const handleFormSubmit = async event => {
        console.log('FORM SUBMITTED');

        try {
            const dataUserSignedUp = await auth.createUserWithEmailAndPassword(userEmail, userPassword);
            // console.log(dataUserSignedUp);
            const { user } = dataUserSignedUp;

            const userData = {
                userName,
                userDOB,
                userContactNumber,
                userGender,
                'userEmail': user.email,
                'userId': user.uid
            }

            //console.log(userData);
            await createUserProfileDocument(userData);
        } catch(err) {
            console.log(err);
        }

    }

    // INITIALIZING FORM USING HOOK

    const [ signUpFormState, 
            errors,
            touched,
            dirty,
            isValid,
            handleInputChange, 
            handleSubmit,
            handleBlur,
            handleFocus ] = useFormValidation(formInitialState, 
                                                   fieldValidationRules, handleFormSubmit);

    const { 
            userName, 
            userEmail, 
            userPassword, 
            userConfirmPassword, 
            userDOB, 
            userGender,
            userContactNumber, 
            userTermsAcceptance
        } = signUpFormState;

    return(
        <div className = 'SignUpSection'>

        <h1> Sign Up here..! </h1>

        <form onSubmit = { handleSubmit } >

            <FormInput 
                {...FormFieldsData.userName} 
                value = {userName}
                haveValidationError = { touched?.userName 
                                        && dirty?.userName
                                        && errors?.userName 
                                        && Object.keys(errors?.userName).length > 0 ? true : false }
                clicked = {handleInputChange}
                blur = {handleBlur}
                focus = {handleFocus} />

                {/* Validation Error Message */}

                { touched?.userName 
                  && dirty?.userName
                  && errors?.userName?.required ? 
                    <p className = 'ValidationErrorMessage'> Username is required </p> 
                    : null 
                }

                { touched?.userName 
                  && dirty?.userName
                  && errors?.userName?.minlength ? 
                    <p className = 'ValidationErrorMessage'> Username should be of minimum 5 character's length </p> 
                    : null 
                }

            <FormInput 
                {...FormFieldsData.userEmail} 
                value = {userEmail} 
                haveValidationError = { touched?.userEmail 
                                        &&dirty?.userEmail 
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
                                        && errors?.userPassword 
                                        && Object.keys(errors?.userPassword).length > 0 ? true : false }
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

                { touched?.userPassword && dirty?.userPassword && errors?.userPassword?.weak ? 
                    <React.Fragment>
                        { errors?.userPassword.weak?.hasNumbers ? <p className = 'ValidationErrorMessage'> Password should contain minimum one digit </p> : null }
                        { errors?.userPassword.weak?.hasLowerCase ? <p className = 'ValidationErrorMessage'> Password should contain minimum one lowercase letter </p> : null }
                        { errors?.userPassword.weak?.hasUpperCase ? <p className = 'ValidationErrorMessage'> Password should contain minimum one uppercase letter </p> : null }
                        { errors?.userPassword.weak?.hasSpecialSymbols ? <p className = 'ValidationErrorMessage'> Password should contain any of these . , ! @ # symbols </p> : null }
                        { errors?.userPassword.weak?.hasMinimumLength ? <p className = 'ValidationErrorMessage'> Password should be minimum of 8 character's length </p> : null }
                    </React.Fragment>
                    : null
                }

            <FormInput 
                {...FormFieldsData.userConfirmPassword} 
                value = {userConfirmPassword} 
                haveValidationError = { touched?.userConfirmPassword 
                                        && dirty?.userConfirmPassword
                                        && errors?.userConfirmPassword 
                                        && Object.keys(errors?.userConfirmPassword).length > 0 ? true : false }
                clicked = {handleInputChange}
                blur = {handleBlur} 
                focus = {handleFocus} />

                {/* Validation Error Message */}

                { touched?.userConfirmPassword 
                  && dirty?.userConfirmPassword
                  && errors?.userConfirmPassword?.required ? 
                    <p className = 'ValidationErrorMessage'> Please confirm the password </p> 
                    : null
                }

                { touched?.userConfirmPassword 
                  && dirty?.userConfirmPassword
                  && errors?.userConfirmPassword?.match ? 
                    <p className = 'ValidationErrorMessage'> Password's doesn't match </p> 
                    : null 
                }

            <FormInput 
                {...FormFieldsData.userDOB} 
                value = {userDOB}
                haveValidationError = { touched?.userDOB
                                        && dirty?.userDOB
                                        && errors?.userDOB 
                                        && Object.keys(errors?.userDOB).length > 0 ? true : false }
                clicked = {handleInputChange}
                blur = {handleBlur} 
                focus = {handleFocus} />

                {/* Validation Error Message */}

                { touched?.userDOB 
                  && dirty?.userDOB
                  && errors?.userDOB?.required ? 
                    <p className = 'ValidationErrorMessage'> Birth Date is required </p> 
                    : null 
                }

                { touched?.userDOB 
                  && dirty?.userDOB
                  && errors?.userDOB?.date ? 
                    <p className = 'ValidationErrorMessage'> Invalid Birth Date </p> 
                    : null 
                }

            <FormInput 
                {...FormFieldsData.userContactNumber} 
                value = {userContactNumber} 
                haveValidationError = { touched?.userContactNumber 
                                        && dirty?.userContactNumber
                                        && errors?.userContactNumber 
                                        && Object.keys(errors?.userContactNumber).length > 0 ? true : false }
                clicked = {handleInputChange}
                blur = {handleBlur} 
                focus = {handleFocus} />

                {/* Validation Error Message */}

                { touched?.userContactNumber 
                  && dirty?.userContactNumber
                  && errors?.userContactNumber?.required ? 
                    <p className = 'ValidationErrorMessage'> Mobile Number is required </p> 
                    : null 
                }

                { touched?.userContactNumber
                  && dirty?.userContactNumber
                  && errors?.userContactNumber?.mobile ? 
                    <p className = 'ValidationErrorMessage'> Invalid Mobile Number </p> 
                    : null 
                }

            <div className = 'GenderGroup'>
                <FormInput 
                    {...FormFieldsData.userGenderMale} 
                    clicked = {handleInputChange}
                    blur = {handleBlur}
                    focus = {handleFocus} />
                <FormInput
                    {...FormFieldsData.userGenderFemale}
                    clicked = {handleInputChange}
                    blur = {handleBlur}
                    focus = {handleFocus} />
            </div>

            <FormInput 
                {...FormFieldsData.userTermsAcceptance} 
                clicked = {handleInputChange}
                value = {userTermsAcceptance}
                blur = {handleBlur}
                focus = {handleFocus} />

            <Button
                type = 'submit'
                btn_label = 'Signup'
                disabled = {!isValid}
                btn_size = 'sm'
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

export { SignUp };