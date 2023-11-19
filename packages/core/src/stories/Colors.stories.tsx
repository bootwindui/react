import { Meta } from '@storybook/react';

import Title from '@bootwind/title';

export default {
  title: 'Components/Core/Colors',
  argTypes: {
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'ghost'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg', 'xl'] },
    },
  },
} as Meta;

export const AllColors = () => {
  const colors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ]
  const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  return (
    <div>

      <Title
        title="Color Styles"
        description="Color Styles in the Bootwind Design System are a cornerstone of your design's visual identity. Customize color palettes, shades, and themes to create a cohesive and appealing color scheme that aligns with your brand or project. Whether you're aiming for a vibrant and energetic look or a calm and minimalist aesthetic, Color Styles allow you to convey the right emotions and capture your audience's attention, enhancing the overall visual impact and recognition of your design."
      />

      {colors.map(color => {
        return (
          <div className="flex gap-5 mb-5 px-5">
            {levels.map(level => (
              <div>
                <div className={`color-swatch bg-${color}-${level} w-32 h-20 rounded-md`} >
                </div>
                <p className='flex justify-between'>
                  <span>{color}</span>
                  <span>{level}</span>
                </p>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
