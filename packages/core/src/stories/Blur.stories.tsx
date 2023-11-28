import { Meta } from '@storybook/react';

export default {
  title: 'Components/Core/Blur',
} as Meta;

export const AllBlur = () => {

  return (
    <div className='bg-gradient-to-b from-blue-400 to-blue-600 p-4'>
      <p className='px-5 mb-8 text-white'>All the blur used by default tailwind classes https://tailwindcss.com/docs/blur</p>
      <div className="flex gap-5 mb-5 px-5">
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-[0px]" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-none</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-sm" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-sm</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-md" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-md</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-lg" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-lg</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-xl" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-xl</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-2xl" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-2xl</span>
          </p>
        </div>
      </div>
      <div className="flex gap-5 mb-5 px-5">
        <div>
          <div className="w-48 h-48 bg-white rounded-lg blur-3xl" />
          <p className='text-white flex justify-between mt-5'>
            <span>blur-3xl</span>
          </p>
        </div>
      </div>
    </div>
  )
}
