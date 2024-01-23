import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import Title from '@bootwind/title';
import { Pagination, PaginationProps } from '../index';

export default {
  title: '❖ • UI Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    type: 'card',
    totalResults: 50,
    resultsPerPage: 10
  },
  argTypes: {
    type: {
      options: ['card', 'centered', 'simple'],
      control: {
        type: 'select'
      }
    },
    currentPage: {
      control: {
        type: 'number'
      }
    },
    totalResults: {
      control: {
        type: 'number'
      }
    },
    resultsPerPage: {
      control: {
        type: 'number'
      }
    },
  },
} as Meta;

export const Card = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        {...args}
        currentPage={currentPage}
        onPrevClick={() => onPageChange(currentPage - 1)}
        onNextClick={() => onPageChange(currentPage + 1)}
        onPageClick={page => onPageChange(page)}
      />
    </>
  );
};
export const Simple = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        {...args}
        type='simple'
        currentPage={currentPage}
        onPrevClick={() => onPageChange(currentPage - 1)}
        onNextClick={() => onPageChange(currentPage + 1)}
        onPageClick={page => onPageChange(page)}
      />
    </>
  );
};
export const Centered = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Pagination
        {...args}
        type='centered'
        currentPage={currentPage}
        onPrevClick={() => onPageChange(currentPage - 1)}
        onNextClick={() => onPageChange(currentPage + 1)}
        onPageClick={page => onPageChange(page)}
      />
    </>
  );
};