import React from 'react';
import { GoChevronRight, GoHome } from 'react-icons/go';

export interface BreadcrumbsProps {
  children: React.ReactNode
  items?: BreadcrumbItemProps[]
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children, items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {items?.map((item,index) => (
          <li key={index}>
            <div className="flex items-center">
              {index > 0 && (
                <GoChevronRight
                  className="mr-2 h-3 w-3 flex-shrink-0 text-gray-500"
                  aria-hidden="true"
                />
              )}
              <BreadcrumbItem {...item}></BreadcrumbItem>
            </div>
          </li>
        ))}
        {React.Children.map(children, (child, index) => (
          <li key={index}>
            <div className="flex items-center">
              {index > 0 && (
                <GoChevronRight
                  className="mr-2 h-3 w-3 flex-shrink-0 text-gray-500"
                  aria-hidden="true"
                />
              )}
              {child}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

interface BreadcrumbItemProps {
  href?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  children,
  icon,
  isActive = false,
}) => {
  const content = href ? (
    <a
      className={`text-sm font-medium ${
        isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700'
      }`}
      href={href}
    >
      {children}
    </a>
  ) : (
    <span
      className={`text-sm font-medium ${
        isActive ? 'text-indigo-600' : 'text-gray-500'
      }`}
    >
      {children}
    </span>
  );

  return (
    <>
      {icon &&
        React.cloneElement(icon as React.ReactElement, {
          className: `${isActive ? 'text-indigo-600' : 'text-gray-500'} ${
            children ? 'mr-2' : ''
          }`,
        })}
      {content}
    </>
  );
};
