import { Meta } from '@storybook/react';

export default {
  title: '❖ • Core/Gradients',
} as Meta;

export const AllGradients = () => {

  return (
    <div className='bg-white rounded-md p-5'>
      <h2 className="text-4xl font-bold text-black tracking-tight">Gradients</h2>
      <p className='mb-5 font-semibold'>All the gradients use bg-gradient-to-b tailwind classes and the color from - to is below the gradients box.</p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="flex gap-5 mb-5">
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-fuchsia-500 to-indigo-600 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>fuchsia-500 → indigo-600</span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-indigo-500 to-indigo-800 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>indigo-500 → indigo-800 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-pink-500 to-indigo-600 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>pink-500 → indigo-600 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-sky-400 to-purple-500 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>sky-400 → purple-500 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-violet-400 to-purple-700 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>violet-400 → purple-700 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>blue-400 → blue-600 </span>
          </p>
        </div>
      </div>

      <div className="flex gap-5 mb-5">
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-emerald-400 to-lime-700 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>emerald-400 → lime-700 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-yellow-200 to-lime-700 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>yellow-200 → lime-700 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-green-400 to-blue-500 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>green-400 → blue-500 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-blue-500 to-pink-500 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>blue-500 → pink-500 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-orange-500 to-pink-600 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>orange-500 → pink-600 </span>
          </p>
        </div>
        <div>
          <div className="w-48 h-20 bg-gradient-to-b from-fuchsia-700 to-red-500 rounded-lg mb-2" />
          <p className='flex justify-between'>
            <span>fuchsia-700 → red-500 </span>
          </p>
        </div>
      </div>
    </div>
  )
}
