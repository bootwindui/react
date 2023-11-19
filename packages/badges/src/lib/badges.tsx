import React, { ReactNode } from 'react';

export interface BadgeProps {
  variant: 'primary' | 'neutral' | 'warning' | 'success' | 'error';
  size?: 'small' | 'large';
  withIcon?: ReactNode;
  withDot?: boolean;
  children: string;
}

interface DotSvgProps {
  variant: BadgeProps['variant'];
}

const DotSvg: React.FC<DotSvgProps> = ({ variant }) => {
  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return ' text-[#4A72FF]';
      case 'neutral':
        return 'text-[#5E718D]';
      case 'warning':
        return 'text-[#D8A800]';
      case 'success':
        return 'text-[#11A75C]';
      case 'error':
        return 'text-[#FF3838]';
      default:
        return 'text-[#4A72FF]';
    }
  };

  return (
    <svg
      className={`-ml-0.5 mr-1.5 h-2 w-2 ${getTextColor()}`}
      fill="currentColor"
      viewBox="0 0 8 8"
    >
      <circle cx={4} cy={4} r={3} />
    </svg>
  );
};

export const Badge: React.FC<BadgeProps> = ({
  variant,
  size = 'small',
  withIcon = null,
  withDot = false,
  children,
}) => {
  const baseClasses = `inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium`;

  const sizeClasses = size === 'large' ? 'text-sm' : '';

  const badgeContent = (
    <>
      {withDot && <DotSvg variant={variant} />}
      {withIcon && <span className="mr-1.5">{withIcon}</span>}
      {children}
    </>
  );

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#F2F5FF] text-[#4A72FF]';
      case 'neutral':
        return `bg-[#F0F3F9] text-[#5E718D]`;
      case 'warning':
        return 'bg-[#FFF9DF] text-[#D8A800]';
      case 'success':
        return 'bg-[#E3F6ED] text-[#11A75C]';
      case 'error':
        return 'bg-[#FFF5F4] text-[#FF3838]';
      default:
        return 'bg-[#F2F5FF] text-[#4A72FF]';
    }
  };

  return (
    <span className={`${baseClasses} ${sizeClasses} ${getVariantClasses()}`}>
      {badgeContent}
    </span>
  );
};

