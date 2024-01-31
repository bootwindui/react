import { Meta } from '@storybook/react';

export default {
  title: '❖ • Core/Grid System',
} as Meta;

export const AllGridSystem = () => {

  return (
    <div className='bg-white p-5 rounded-md'>
      <h2 className="text-4xl font-bold text-black tracking-tight">Grid System</h2>
      <p className='mb-5 font-semibold'>All the grid used by default tailwind classes <a href="https://tailwindcss.com/docs/flex">https://tailwindcss.com/docs/flex</a></p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="w-[1360px] h-[1962px] flex-col justify-start items-start gap-[30px] inline-flex">
        <div className="flex-col justify-start items-start gap-[30px] flex">
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 1</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/1</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 2</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/2</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/2</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 3</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/3</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/3</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/3</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 4</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/4</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/4</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/4</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/4</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 5</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/5</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/5</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/5</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/5</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/5</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 6</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/6</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/6</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/6</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/6</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/6</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/6</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 7</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/7</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 8</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/8</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 9</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/9</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 10</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/10</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 11</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/11</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[136px] flex-col justify-start items-start gap-[15px] flex">
            <div className="w-[1360px] h-[17px] relative">
              <div className="w-[1360px] left-0 top-0 absolute text-slate-600 text-[15px] font-medium font-['Inter'] tracking-tight">Size 1 of 12</div>
            </div>
            <div className="w-[1360px] py-5 bg-violet-200 justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
              <div className="grow shrink basis-0 p-5 bg-white bg-opacity-20 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-black text-base font-bold font-['Inter'] leading-normal tracking-tight">1/12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
