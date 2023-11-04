import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface ToggleProps {
  onToggle: (isEnabled: boolean) => void;
  color: 'primary' | 'secondary';
  iconOn: React.ReactNode;
  iconOff: React.ReactNode;
}

const Toggle: React.FC<ToggleProps> = ({
  onToggle,
  color,
  iconOn,
  iconOff,
}) => {
  const [enabled, setEnabled] = useState(false);

  const toggleStyles = {
    primary: enabled ? 'bg-primary' : 'bg-gray-200',
    secondary: enabled ? 'bg-[#2D3643]' : 'bg-gray-200',
  };

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        toggleStyles[color],
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-1'
      )}
    >
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out '
        )}
      >
        {enabled ? iconOn : iconOff}
      </span>
    </Switch>
  );
};

export default Toggle;
