import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons'

import './FormInput.styles.css';

const FormInput = (props) => {
    const { validations, faIcon, value, clicked, blur, focus, haveValidationError, ...otherProps } = props;

    // Field Group styles

    let fieldGroupStyles = ['InputFieldGroup'];
    let inputFieldStyles = ['InputField'];

    if(haveValidationError) {
        inputFieldStyles.push('ValidationError');
    } else {
        if(inputFieldStyles.includes('ValidationError')) {
            inputFieldStyles.pop('ValidationError');
        }
    }

    // Initialising Field Input Icon 

    let iconElem = null;
    if(faIcon) {
        iconElem = <div className = 'IconContainer'>
                        <FontAwesomeIcon icon = {faIcons[faIcon]} className = 'InputFieldIcon' />
                    </div>;
    }

    // Check for radio/checkbox
    
    let inputField = null;
    if(otherProps.type === 'radio') {
        const { fieldValue, label, ...props } = otherProps;
        inputField = <div className = 'RadioButtonGroup'>
                        <label htmlFor = {props.id}>
                            <input
                                {...props}
                                value = {fieldValue}
                                onChange = {clicked}
                                onBlur = {blur}
                                onFocus = {focus} />
                            <FontAwesomeIcon icon = {faIcons[faIcon]} className = 'RadioButtonIcon'/>
                            <span>{label}</span>
                        </label>
                    </div>
    } else if(otherProps.type === 'checkbox') {
        const { message, ...props } = otherProps;
        inputField = <div className = 'CheckBoxGroup'>
                        <label className = 'LabelCheckBox' htmlFor = {otherProps.id}>
                            <input
                                {...props}
                                onChange = {clicked}
                                onBlur = {blur}
                                onFocus = {focus}
                                className = 'CheckBoxField' />
                            <span>{message}</span>
                        </label>
                    </div>           
    } else {
        fieldGroupStyles.push('InputFieldGroupSize');
    }

    return(
        <div className = {fieldGroupStyles.join(' ')}>

            {
                inputField ? inputField : (
                    <React.Fragment>
                        {iconElem}
                        <input
                            {...otherProps}
                            className = {inputFieldStyles.join(' ')}
                            value = {value}
                            onChange = {clicked}
                            onBlur = {blur}
                            onFocus = {focus}
                            autoComplete = 'off' />
                    </React.Fragment>
                )
            }

        </div>
    )
};

export { FormInput };