import React, { ReactElement } from 'react';
import { cn } from "@bootwind/common"
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'text-only';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children?: ReactNode
  className?: string
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center rounded-lg border border-transparent font-semibold  disabled:text-[#CED2D6]';

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-2 text-lg',
    xl: 'px-6 py-3 text-xl',
  };

  const colorStyles = {
    primary:
      `bg-primary text-white shadow-sm hover:bg-[#525CD9] border border-gray-50
      enabled:hover:outline-none enabled:hover:ring-1 enabled:hover:ring-gray-200 
      focus:outline-none focus:ring-4 focus:ring-gray-200
      disabled:bg-[#F6F7F9] disabled:border-gray-300`,
    secondary:
      `border-slate-300 border text-black shadow-sm 
      enabled:hover:border-gray-500 enabled:hover:bg-[#F6F7F9]
      focus:outline-none focus:ring-2 focus:ring-gray-300`,
    'text-only': 'text-black',
  };

  const buttonStyles = cn(baseStyles, sizeStyles[size], colorStyles[variant], className);

  return (
    <>
    <button type="button" className={buttonStyles} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
    </>
  );
};
