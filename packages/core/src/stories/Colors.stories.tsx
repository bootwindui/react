import { Meta } from '@storybook/react';

export default {
  title: '❖ • Core/Colors',
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
    <div className='bg-[#F4F5F7] p-4'>
      <div className="flex gap-5 mb-5 px-5">
        <div>
          <div className={`color-swatch bg-primary w-48 h-16 rounded-md`} >
          </div>
          <p className='flex justify-between'>
            <span>primary</span>
          </p>
        </div>
      </div>
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
