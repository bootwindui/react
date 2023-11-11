import React, { useState } from 'react';
import { GoInfo, GoXCircle, GoCheckCircle } from 'react-icons/go';

interface AlertProps {
  type: 'warning' | 'error' | 'success' | 'info';
  title: string;
  description?: string | React.ReactNode;
  actions?: React.ReactNode;
  link?: {
    url: string;
    text: string;
  };
  dismissButton?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  type,
  title,
  description,
  actions,
  link,
  dismissButton = false,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <GoInfo className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        );
      case 'error':
        return (
          <GoXCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
        );
      case 'success':
        return (
          <GoCheckCircle
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        );
      case 'info':
        return <GoInfo className="h-5 w-5 text-blue-400" aria-hidden="true" />;
      default:
        return null;
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div
      className={`rounded-md p-4 ${
        type === 'warning'
          ? 'bg-yellow-50'
          : type === 'error'
          ? 'bg-red-50'
          : type === 'success'
          ? 'bg-green-50'
          : type === 'info'
          ? 'border-l-4 border-blue-400 bg-blue-50'
          : ''
      }`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="ml-3 flex-1">
          <h3
            className={`text-sm font-medium ${
              type === 'warning'
                ? 'text-yellow-800'
                : type === 'error'
                ? 'text-red-800'
                : type === 'success'
                ? 'text-green-800'
                : type === 'info'
                ? 'text-blue-800'
                : ''
            }`}
          >
            {title}
          </h3>
          {description && (
            <div
              className={`mt-2 text-sm ${
                type === 'warning'
                  ? 'text-yellow-700'
                  : type === 'error'
                  ? 'text-red-700'
                  : type === 'success'
                  ? 'text-green-700'
                  : type === 'info'
                  ? 'text-blue-700'
                  : ''
              }`}
            >
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          )}
          {actions && <div className="mt-4">{actions}</div>}
        </div>
        {link && (
          <p className="mt-3 text-sm md:mt-0 md:ml-3">
            <a
              href={link.url}
              className={`whitespace-nowrap font-medium ${
                type === 'warning'
                  ? 'text-yellow-700 hover:text-yellow-600'
                  : type === 'error'
                  ? 'text-red-700 hover:text-red-600'
                  : type === 'success'
                  ? 'text-green-700 hover:text-green-600'
                  : type === 'info'
                  ? 'text-blue-700 hover:text-blue-600'
                  : ''
              }`}
            >
              {link.text}
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        )}
        {dismissButton && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={handleDismiss}
                className={`inline-flex rounded-md p-1.5 ${
                  type === 'warning'
                    ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50'
                    : type === 'error'
                    ? 'bg-red-50 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50'
                    : type === 'success'
                    ? 'bg-green-50 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'
                    : type === 'info'
                    ? 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-50'
                    : ''
                }`}
              >
                <span className="sr-only">Dismiss</span>
                <GoXCircle className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
