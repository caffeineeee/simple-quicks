import React from 'react';

import { Field } from './style';
import { InputProps } from './type';
import { cn } from '@/lib/utils';

export const TextInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
    <Field component={label ? 'label' : 'div'}>
      {label && !inlineLabel && (
        <span className="block text-[#262626] text-[0.75rem] font-medium leading-5 mb-1">
          {label}
        </span>
      )}
      <div className={cn(
        'flex w-full h-8 px-3.5 py-[0] border-[1px] border-[solid] rounded-[0.3125rem]',
        error ? "border-[#D21C1C]" : help ? "border-[#FF6112]" : "border-[#E6E6E6]",
        disabled ? "bg-[#F0F0F0] cursor-not-allowed" : "bg-white cursor-auto"
      )}>
        {prefix && <div className="flex justify-center items-center text-[0.875rem] font-medium pr-2">{prefix}</div>}
        {label && inlineLabel && (
          <span className="block text-[#262626] text-[0.75rem] font-medium leading-5 mr-3 self-center">
            {label}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            'flex-[1_1_20%] border-[none] p-0 w-full h-full text-[#555555] text-[0.875rem] font-semibold leading-5 focus:outline-[none]',
            readOnly ? 'read-only:placeholder:font-medium placeholder:text-[#abaeb8]' : '',
            disabled ? 'disabled:bg-[#f0f0f0] disabled:cursor-not-allowed' : ''
          )}
          {...other}
        />
        {suffix && <div className="flex justify-center items-center text-[0.875rem] font-medium pl-2">{suffix}</div>}
      </div>
    </Field>
  );
});