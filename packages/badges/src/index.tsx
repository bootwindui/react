import React, { ReactNode } from 'react';

export interface BadgeProps {
  variant: 'primary' | 'neutral' | 'warning' | 'success' | 'error';
  size?: 'small' | 'large';
  withIcon?: ReactNode;
  withDot?: boolean;
}

const DotSvg = () => (
  <svg
    className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
    fill="currentColor"
    viewBox="0 0 8 8"
  >
    <circle cx={4} cy={4} r={3} />
  </svg>
);

const Badge: React.FC<BadgeProps> = ({
  variant,
  size = 'small',
  withIcon = null,
  withDot = false,
}) => {
  const baseClasses = `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium`;

  const sizeClasses = size === 'large' ? 'text-sm' : '';

  const badgeContent = (
    <>
      {withDot && (
        <span className="mr-1.5">
          <DotSvg />
        </span>
      )}
      {withIcon && <span className="mr-0.5">{withIcon}</span>}
      Badge
    </>
  );

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'neutral':
        return `bg-gray-300 text-gray-800`;
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return `bg-gray-300 text-gray-800`;
    }
  };

  return (
    <span className={`${baseClasses} ${sizeClasses} ${getVariantClasses()}`}>
      {badgeContent}
    </span>
  );
};

export default Badge;
