import React from 'react';

interface TitleProps {
  title?: string;
  description?: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <div className="w-full rounded h-72 p-8 bg-gradient-to-t from-white to-indigo-500 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch pl-2 pr-3 py-2.5 bg-white rounded-lg justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <img className="w-7 h-7 rounded-full" src="https://avatars.githubusercontent.com/u/146662809?s=200&v=4" alt="Avatar" />
          <div className="text-slate-800 text-md font-medium tracking-tight leading-tight">
            Bootwind Design System
          </div>
        </div>
        <a href='https://www.bootwind.com/' className="text-right text-slate-800 text-opacity-60 text-sm font-medium underline leading-tight">
          bootwind.com
        </a>
      </div>
      <div className="self-stretch text-slate-800 text-3xl font-medium tracking-tight leading-9">
        {title}
      </div>
      <div className="w-full text-slate-800 text-opacity-50 text-base font-normal leading-normal">
        {description}
      </div>
    </div>
  );
};

export default Title;
