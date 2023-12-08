import React from 'react';
import { styled } from 'twin.macro';

import { StyledInput, StyledInputWrapper, Field } from './style';
import { InputProps } from './type';

const TextInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    error,
    help,
    inlineLabel = false,
    label,
    prefix,
    suffix,
    disabled = false,
    readOnly = false,
    ...other
  } = props;
  return (
    <Field className="input-container" component={!!label ? 'label' : 'div'}>
      {label && !inlineLabel && <span className="input-label non-inline-label">{label}</span>}
      <StyledInputWrapper className="input-wrapper" error={error} help={help} disabled={disabled}>
        {prefix && <div className="prefix-container">{prefix}</div>}
        {label && inlineLabel && <span className="input-label inline-label">{label}</span>}
        <StyledInput
          ref={ref}
          className="input-field"
          disabled={disabled}
          readOnly={readOnly}
          {...other}
        />
        {suffix && <div className="suffix-container">{suffix}</div>}
      </StyledInputWrapper>
      {error && (
        <div className="error-container">
          <span className="error-text">{error}</span>
        </div>
      )}
      {help && !error && (
        <div className="help-container">
          <span className="help-text">{help}</span>
        </div>
      )}
    </Field>
  );
});

export default TextInput;

TextInput.displayName = 'Text Input';
