import React, { ReactElement } from 'react';
import { ReactNode } from 'react';

type ButtonSize = 'sm' | 'md' ;
type BadgeVariant = 'primary' | 'neutral' | 'warning' | 'success' | 'error';

export interface BadgeProps {
  variant?: BadgeVariant;
  type?: "light" | "strong"
  size?: ButtonSize;
  children?: ReactNode
}

export const Badge = ({
  variant = 'primary',
  size = 'sm',
  type = "light",
  children,
  ...props
}: BadgeProps) => {
  const baseStyles = ''

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
  };

  const colorStyles = {
    primary: 'bg-light-primary text-primary',
    neutral: 'bg-slate-500 text-slate-100',
    warning: 'bg-slate-500 text-slate-100',
    success: 'bg-slate-500 text-slate-100',
    error: 'bg-slate-500 text-slate-100',
  };

  const badgeStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[variant]}`;

  return (
    <>
    <span className={badgeStyles} {...props}>
      {children}
    </span>
    </>
  );
};
