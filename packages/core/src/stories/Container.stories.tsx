import { Meta } from '@storybook/react';

export default {
  title: '❖ • Core/Container',
} as Meta;

export const AllContainer = () => {

  return (
    <div className='bg-white p-5 rounded-md'>
      <h2 className="text-4xl font-bold text-black tracking-tight">Container</h2>
      <p className='mb-5 font-semibold'>All the container used by default tailwind classes <a href="https://tailwindcss.com/docs/container">https://tailwindcss.com/docs/container</a></p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="w-[1536px] h-[440px] flex-col justify-start items-center gap-[30px] inline-flex">
        <div className="w-[640px] py-5 bg-violet-200 justify-center items-start gap-8 inline-flex">
          <div className="text-center text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">sm (640px)</div>
        </div>
        <div className="w-[768px] py-5 bg-violet-200 justify-center items-start gap-8 inline-flex">
          <div className="text-center text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">md (768px)</div>
        </div>
        <div className="w-[1024px] py-5 bg-violet-200 justify-center items-start gap-8 inline-flex">
          <div className="text-center text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">lg (1024px)</div>
        </div>
        <div className="w-[1280px] py-5 bg-violet-200 justify-center items-start gap-8 inline-flex">
          <div className="text-center text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">xl (1280px)</div>
        </div>
        <div className="w-[1536px] py-5 bg-violet-200 justify-center items-start gap-8 inline-flex">
          <div className="text-center text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">2xl (1536px)</div>
        </div>
      </div>
    </div>
  )
}
