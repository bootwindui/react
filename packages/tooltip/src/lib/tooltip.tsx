import { cn } from "@bootwind/common";
import React, { ReactNode } from "react";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  variant?: "dark" | "light",
  position?: "top" | "bottom" | "right" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  
  return (
    <div className="tooltip-wrapper group relative inline-block"> 
        {children}
    </div>
  );
};

export default Tooltip;
