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
    <div className='bg-white rounded-md p-5'>
      <h2 className="text-4xl font-bold text-black tracking-tight">Colors</h2>
      <p className='mb-5 font-semibold'>All the colors used by default tailwind classes <a href="https://tailwindcss.com/docs/colors">https://tailwindcss.com/docs/colors</a></p>
      <hr className="h-px my-4 bg-gray-400 border-0" />
      <div className="flex gap-5 mb-5">
        <div>
          <div className={`color-swatch bg-primary w-48 h-16 rounded-md mb-2`} >
          </div>
          <p className='flex justify-between'>
            <span>primary</span>
          </p>
        </div>
      </div>
      {colors.map(color => {
        return (
          <div className="flex gap-5 mb-5">
            {levels.map(level => (
              <div>
                <div className={`color-swatch bg-${color}-${level} w-32 h-20 rounded-md mb-2`} >
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
