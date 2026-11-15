'use client';
import { useScroll } from '@/app/context/ScrollContext';
import Logo from '@/components/UI/Logo';
export default function Hero() {
  const { scrolled } = useScroll();

  return (
    <section
      className={`
        mx-auto  h-[93vh] overflow-hidden relative
        transition-all duration-700 ease-in-out px-6 py-8
        ${scrolled ? 'w-[95vw] rounded-2xl mt-10' : 'w-screen'}
      `}
    >
      <video
        className='absolute inset-0 h-full w-full object-cover'
        muted
        autoPlay
        loop
        playsInline
        preload='auto'
      >
        <source src='/video/hero-video.mp4' />
      </video>
      <div className='absolute inset-0 bg-linear-0 from-black to-black/30'></div>

      <div className='relative  z-10 flex h-full flex-col gap-2 justify-end lg:px-8 text-white'>
        <Logo className='logo-animation w-24 h-24 md:w-64 md:h-64' />
        <p className='max-w-lg text-xl font-light font-sans-alt '>
          A collection of moments, perspectives and places.
        </p>
        <h1 className='max-w-4xl text-5xl font-medium'>Freesol Creatives</h1>
        <h2 className='max-w-4xl text-3xl font-medium'>Freesol Creatives</h2>
      </div>
    </section>
  );
}
