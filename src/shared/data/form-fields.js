const formFields = {
    userName : {
        type: 'text',
        name: 'userName',
        id: 'userName',
        placeholder: 'Your name',
        faIcon: 'faUser'
    },
    userEmail: {
        type: 'email',
        name: 'userEmail',
        id: 'userEmail',
        placeholder: 'Your Email',
        faIcon: 'faEnvelope'
    },
    userPassword: {
        type: 'password',
        name: 'userPassword',
        id: 'userPassword',
        placeholder: 'Your Password',
        faIcon: 'faLock'
    },
    userConfirmPassword: {
        type: 'password',
        name: 'userConfirmPassword',
        id: 'userConfirmPassword',
        placeholder: 'Confirm the password',
        faIcon: 'faLock'
    },
    userDOB: {
        type: 'text',
        name: 'userDOB',
        id: 'userDOB',
        placeholder: 'Date of Birth (YYYY/MM/DD)',
        faIcon: 'faCalendarAlt'
    },
    userContactNumber: {
        type: 'number',
        name: 'userContactNumber',
        id: 'userContactNumber',
        placeholder: 'Your Contact Number',
        faIcon: 'faPhoneAlt'
    },
    userGenderMale: {
        type: 'radio',
        name: 'userGender',
        id: 'userGenderMale',
        fieldValue: 'male',
        faIcon: 'faMale',
        label: 'Male'
    },
    userGenderFemale: {
        type: 'radio',
        name: 'userGender',
        id: 'userGenderFemale',
        fieldValue: 'female',
        faIcon: 'faFemale',
        label: 'Female'
    },
    userTermsAcceptance: {
        type: 'checkbox',
        name: 'userTermsAcceptance',
        id: 'userTermsAcceptance',
        message: "I agree to Twitter's Terms of use"
    }
}

export default formFields;