import { Meta } from '@storybook/react';

export default {
  title: '❖ • Core/Blur',
} as Meta;

export const AllBlur = () => {

  return (
    <div className='bg-gradient-to-b from-blue-400 to-blue-600 p-5 rounded-md'>
      <h2 className="text-4xl font-bold text-white tracking-tight">Blur</h2>
      <p className='mb-5 font-semibold text-white'>All the blur used by default tailwind classes <a href="https://tailwindcss.com/docs/colors">https://tailwindcss.com/docs/blur</a></p>
      <hr className="h-px my-4 bg-gray-100 border-0" />
      <div className="flex gap-5 mb-5">
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
      <div className="flex gap-5 mb-5">
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
