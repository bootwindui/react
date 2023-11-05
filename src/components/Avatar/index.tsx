import React from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  notificationDot?: 'gray' | 'red' | 'green';
  showPlaceholder?: boolean; // Tambahkan properti showPlaceholder
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  rounded = 'md',
  notificationDot,
  showPlaceholder = false, // Defaultnya tidak menampilkan placeholder
}) => {
  const roundedClass = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  let notificationDotColor = '400';

  if (notificationDot === 'gray') {
    notificationDotColor = '300';
  }

  const shouldShowPlaceholder = !src && showPlaceholder;

  return (
    <span className="relative inline-block">
      {notificationDot && (
        <span
          className={`absolute bottom-0 right-0 block ${
            rounded === 'full'
              ? 'h-2 w-2'
              : 'translate-y-1/2 translate-x-1/2 transform h-2 w-2'
          } rounded-full bg-${notificationDot}-${notificationDotColor} ring-1 ring-white`}
        />
      )}
      {shouldShowPlaceholder ? (
        <img
          className={`inline-block h-8 w-8 bg-gray-200 ${roundedClass[rounded]}`}
          src="https://english.columbia.edu/themes/custom/columbia/assets/img/people-default.svg"
          alt={alt}
        />
      ) : src ? (
        <img
          className={`inline-block h-8 w-8 ${roundedClass[rounded]}`}
          src={src}
          alt={alt}
        />
      ) : null}
    </span>
  );
};

export default Avatar;
