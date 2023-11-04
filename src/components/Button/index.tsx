import React from 'react';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  hasArrow?: boolean;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  hasArrow = false,
  icon,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center rounded-lg border border-transparent font-semibold';

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-4 py-2 text-lg',
    xl: 'px-6 py-3 text-xl',
  };

  const colorStyles = {
    primary:
      'bg-primary text-white shadow-sm hover:bg-[#525CD9] hover:outline-none hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200',
    secondary:
      'border border-slate-200 bg-white text-black shadow-sm hover:border-gray-500 hover:bg-[#F6F7F9] focus:outline-none focus:ring-2 focus:ring-gray-300',
    ghost: 'text-black',
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[variant]}`;

  return (
    <button type="button" className={buttonStyles} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {hasArrow && <span className="ml-2">→</span>}
    </button>
  );
};
