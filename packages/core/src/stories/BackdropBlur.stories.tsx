import { Meta } from '@storybook/react';

export default {
    title: '❖ • Core/Backdrop Blur',
} as Meta;

export const AllBackdropBlur = () => {

    return (
        <div style={{
            backgroundImage: "url(" + 'https://w0.peakpx.com/wallpaper/390/257/HD-wallpaper-macos-ventura-ios-16-dark-wwdc-2022-apple.jpg' + ")", backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className='p-5 rounded-md'>
            <h2 className="text-4xl font-bold text-white tracking-tight">Backdrop Blur</h2>
            <p className='mb-5 font-semibold text-white'>All the backrop blur used by default tailwind classes <a href="https://tailwindcss.com/docs/backrop-blur">https://tailwindcss.com/docs/backrop-blur</a></p>
            <hr className="h-px my-4 bg-gray-100 border-0" />
            <div className="flex gap-5 mb-5">
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-none" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-none</span>
                    </p>
                </div>
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-sm" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-sm</span>
                    </p>
                </div>
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur</span>
                    </p>
                </div>
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-md" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-md</span>
                    </p>
                </div>
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-lg" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-lg</span>
                    </p>
                </div>
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-xl" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-xl</span>
                    </p>
                </div>
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-2xl" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-2xl</span>
                    </p>
                </div>
            </div>
            <div className="flex gap-5 mb-5">
                <div>
                    <div className="w-48 h-48 bg-white/30 rounded-lg backdrop-blur-3xl" />
                    <p className='text-white flex justify-between mt-5'>
                        <span>blur-3xl</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
