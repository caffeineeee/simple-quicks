"use client";

import React from 'react';

export const Field: any =
  React.forwardRef<any, any>(
    ({ component: Component, className, children, spaceAfter, theme, $width, ...props }, ref) => {
      return (
        <Component className={className} ref={ref} {...props}>
          {children}
        </Component>
      );
    },
  );

Field.displayName = 'Field';
