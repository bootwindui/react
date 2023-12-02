import React, { ReactNode, useState } from "react";

export interface SliderProps {
  min?: number;
  max?: number;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ min = 1, max = 5, leftContent, rightContent }) => {
  const [value, setValue] = useState((min + max) / 2);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <fieldset className="flex flex-nowrap items-center max-w-xs space-x-2 text-gray-100">
      {leftContent && (
        <label htmlFor="Slider">
          {leftContent}
        </label>
      )}
      <input
        id="Slider"
        type="range"
        value={value}
        onChange={handleSliderChange}
        className="w-full h-2 rounded-lg cursor-pointer accent-primary"
        min={min}
        max={max}
      />
      {rightContent && (
        <label htmlFor="Slider">
          {rightContent}
        </label>
      )}
    </fieldset>
  );
};

export default Slider;
