import React, { ReactNode, useState } from "react";
import { cn } from "@bootwind/common";

export interface SliderProps {
  min?: number;
  max?: number;
  className?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

export const Slider: React.FC<SliderProps> = ({
  min = 1,
  max = 5,
  className,
  leftContent,
  rightContent,
}) => {
  const [value, setValue] = useState((min + max) / 2);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  const handleSliderHover = (event: React.MouseEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.currentTarget.value, 10);
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({ x: event.clientX, y: rect.top - 30 });
    setHoveredValue(newValue);
    setShowTooltip(true); // Show tooltip when hovering
  };

  const handleSliderLeave = () => {
    setHoveredValue(null);
    setShowTooltip(false); // Hide tooltip when leaving
  };

  return (
    <fieldset className="flex flex-nowrap items-center max-w-xs space-x-2 text-gray-100 relative">
      {leftContent && <label htmlFor="Slider">{leftContent}</label>}
      <input
        id="Slider"
        type="range"
        value={value}
        onChange={handleSliderChange}
        onMouseMove={handleSliderHover}
        onMouseLeave={handleSliderLeave}
        className={cn(className, "w-full h-2 rounded-lg cursor-pointer accent-primary")}
        min={min}
        max={max}
      />
      {showTooltip && hoveredValue !== null && (
        <div
          className="tooltip absolute bg-gray-800 text-white text-xs py-1 px-2 rounded"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {hoveredValue}
        </div>
      )}
      {rightContent && <label htmlFor="Slider">{rightContent}</label>}
    </fieldset>
  );
};
