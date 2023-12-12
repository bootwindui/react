import { cn } from "@bootwind/common";
import React, { ReactNode } from "react";

export interface TooltipProps {
  position: "top" | "bottom" | "right" | "left";
  content: ReactNode;
  children: ReactNode;
  variant?: "dark" | "light";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position, variant = "dark" }) => {
  const positionClasses = {
    right: 'left-full top-1/2 z-20 ml-3 -translate-y-1/2',
    top: 'bottom-full left-1/2 z-20 mb-3 -translate-x-1/2',
    left: 'right-full top-1/2 z-20 mr-3 -translate-y-1/2',
    bottom: 'left-1/2 top-full z-20 mt-3 -translate-x-1/2',
  }
  const classes = cn(
    'absolute rounded whitespace-nowrap px-4 py-[6px] text-sm font-semibold  opacity-0 group-hover:opacity-100',
    variant === 'dark' ? 'bg-black text-white' : 'bg-white text-black',
    positionClasses[position]
  )
  return (
    <div className="tooltip-wrapper group relative inline-block"> 
        <div className="inline-flex">{children}</div>
        <div
          className={classes}
        >
          <div className={`w-40 whitespace-normal text-center`}>
            {content}
          </div>
        </div>
    </div>
  );
};

export default Tooltip;
