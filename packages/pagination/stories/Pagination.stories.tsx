import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import Pagination from '../src/index';

const userData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
}));

const columns = [
  { label: 'ID', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Email', key: 'email' },
];

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta;

const TemplateDefault = args => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const onPageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);

  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} className="p-2 border-b">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(user => (
            <tr key={user.id}>
              <td className="p-2 border-b">{user.id}</td>
              <td className="p-2 border-b">{user.name}</td>
              <td className="p-2 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        type="card"
        currentPage={currentPage}
        totalResults={userData.length}
        resultsPerPage={resultsPerPage}
        onPrevClick={() => onPageChange(currentPage - 1)}
        onNextClick={() => onPageChange(currentPage + 1)}
        onPageClick={page => onPageChange(page)}
      />
    </div>
  );
};

const TemplateCentered = args => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const onPageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);

  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} className="p-2 border-b">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(user => (
            <tr key={user.id}>
              <td className="p-2 border-b">{user.id}</td>
              <td className="p-2 border-b">{user.name}</td>
              <td className="p-2 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        type="centered"
        currentPage={currentPage}
        totalResults={userData.length}
        resultsPerPage={resultsPerPage}
        onPrevClick={() => onPageChange(currentPage - 1)}
        onNextClick={() => onPageChange(currentPage + 1)}
        onPageClick={page => onPageChange(page)}
      />
    </div>
  );
};

const TemplateSimple = args => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const onPageChange = page => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = currentPage * resultsPerPage;
  const paginatedData = userData.slice(startIndex, endIndex);

  return (
    <div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key} className="p-2 border-b">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(user => (
            <tr key={user.id}>
              <td className="p-2 border-b">{user.id}</td>
              <td className="p-2 border-b">{user.name}</td>
              <td className="p-2 border-b">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        type="simple"
        currentPage={currentPage}
        totalResults={userData.length}
        resultsPerPage={resultsPerPage}
        onPrevClick={() => onPageChange(currentPage - 1)}
        onNextClick={() => onPageChange(currentPage + 1)}
        onPageClick={page => onPageChange(page)}
      />
    </div>
  );
};

export const Default = TemplateDefault.bind({});
export const Simple = TemplateSimple.bind({});
export const Centered = TemplateCentered.bind({});
