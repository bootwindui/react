import React, { ReactNode } from "react";

export interface TooltipProps {
  position: "top" | "bottom" | "right" | "left";
  content: ReactNode;
  children: ReactNode;
  color?: "dark" | "light";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position, color = "dark" }) => {
  return (
    <div className="mb-14">
      <div className="group relative inline-block">
        <div className="inline-flex">{children}</div>
        <div className="shadow-md">
          <div
            className={` ${(position === "right" &&
              `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded ${color === 'dark' ? 'bg-black' : 'bg-white'} px-4 py-[6px] text-sm font-semibold text-${color === 'dark' ? 'white' : 'black'} opacity-0 group-hover:opacity-100`) ||
              (position === "top" &&
                `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded ${color === 'dark' ? 'bg-black' : 'bg-white'} px-4 py-[6px] text-sm font-semibold text-${color === 'dark' ? 'white' : 'black'} opacity-0 group-hover:opacity-100`) ||
              (position === "left" &&
                `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded ${color === 'dark' ? 'bg-black' : 'bg-white'} px-4 py-[6px] text-sm font-semibold text-${color === 'dark' ? 'white' : 'black'} opacity-0 group-hover:opacity-100`) ||
              (position === "bottom" &&
                `absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded ${color === 'dark' ? 'bg-black' : 'bg-white'} px-4 py-[6px] text-sm font-semibold text-${color === 'dark' ? 'white' : 'black'} opacity-0 group-hover:opacity-100`)
              }`}
          >
            <span
              className={` ${(position === "right" &&
                `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm ${color === 'dark' ? 'bg-black' : 'bg-white'}`) ||
                (position === "top" &&
                  `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm ${color === 'dark' ? 'bg-black' : 'bg-white'}`) ||
                (position === "left" &&
                  `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm ${color === 'dark' ? 'bg-black' : 'bg-white'}`) ||
                (position === "bottom" &&
                  `absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm ${color === 'dark' ? 'bg-black' : 'bg-white'}`)
                } `}
            ></span>
            <div className={`w-40 whitespace-normal text-center`}>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
