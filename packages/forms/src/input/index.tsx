import React, { ReactNode, useId } from 'react';
import { useState } from 'react';

export interface InputProps {
  id?: string
  type?: string
  name?: string
  variant?: "default" | "danger" | "warning" | "success"
  label?: string
  placeholder?: string
  disabled?: boolean,
  description?: string
  leftSection?: string | ReactNode
  rightSection?: string | ReactNode
}
const Input: React.FC<InputProps> = ({
  id = useId(),
  label,
  type = "text",
  description,
  name,
  placeholder,
  disabled = false,
  leftSection,
  rightSection
}) => {
  const variantMap = {}
  const inputClasses = `transition duration-200 placeholder:text-gray-400 
                        rounded-lg border-gray-400 
                        hover:border-gray-900 
                        focus:border-gray-400
                        focus:ring-4
                        focus:ring-gray-300
                        text-gray-900 
                        py-2.5 px-3.5
                        w-80 max-w-full
                        disabled:bg-neutral-100
                        disabled:cursor-not-allowed
                        `
  return (
    <div className="input-group mb-3">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} name={name} className={inputClasses} disabled={disabled}/>
      <span>{description}</span>
    </div>
  );
};

export default Input;
