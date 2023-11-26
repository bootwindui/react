import React from 'react';
import { useState } from 'react';
import { cn } from "@bootwind/common"

export interface CheckboxProps {
  id: string
  label: string
  className?: string
  isRounded?: boolean
  indeterminate?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  className,
  isRounded = false,
  indeterminate = false,
}) => {
  const [checked, setChecked] = useState(indeterminate ? false : undefined);

  const handleCheckboxChange = () => {
    setChecked(prevChecked => {
      if (prevChecked === false) return undefined;
      return !prevChecked;
    });
  };

  const checkboxStyles = isRounded
    ? 'h-4 w-4 rounded-full border-primary text-primary focus:ring-primary'
    : 'h-4 w-4 rounded border-primary text-primary focus:ring-primary';

  return (
    <div className={cn("flex items-center", className)}>
      <input
        id={id}
        name={id}
        type="checkbox"
        className={checkboxStyles}
        checked={checked}
        onChange={handleCheckboxChange}
        ref={input => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
      />
      <label htmlFor={id} className="ml-2">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
