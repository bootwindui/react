import { Meta } from '@storybook/react';

export default {
  title: '❖ • Core/Shadows',
} as Meta;

export const AllShadows = () => {

  return (
    <div className='bg-[#F4F5F7] p-4'>
      <p className='px-5 mb-5'>All the shadows used by default tailwind classes https://tailwindcss.com/docs/box-shadow</p>
      <div className="flex gap-5 mb-5 px-5">
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow-sm" />
          <p className='flex justify-between mt-5'>
            <span>shadow-sm</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow" />
          <p className='flex justify-between mt-5'>
            <span>shadow</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow-md" />
          <p className='flex justify-between mt-5'>
            <span>shadow-md</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow-lg" />
          <p className='flex justify-between mt-5'>
            <span>shadow-lg</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow-xl" />
          <p className='flex justify-between mt-5'>
            <span>shadow-xl</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow-2xl" />
          <p className='flex justify-between mt-5'>
            <span>shadow-2xl</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg shadow-inner" />
          <p className='flex justify-between mt-5'>
            <span>shadow-inner</span>
          </p>
        </div>
      </div>


    </div>
  )
}
