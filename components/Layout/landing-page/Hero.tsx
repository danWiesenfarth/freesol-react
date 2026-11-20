'use client';

import Image from 'next/image';
import { useScroll } from '@/context/ScrollContext';
import Logo from '@/components/UI/Logo';
import { HeroProps } from '@/data/interfaces/hero.interface';

export default function Hero({ heroContent }: HeroProps) {
  const { scrolled } = useScroll();

  const { title, subtitle, description, media, showLogo = false } = heroContent;

  return (
    <section
      className={`
        mx-auto h-[93vh] overflow-hidden relative
        transition-all duration-700 ease-in-out px-6 py-8
        ${scrolled ? 'w-[95vw] rounded-2xl mt-10' : 'w-screen'}
      `}
    >
      {media.type === 'video' ? (
        <video
          key={media.src}
          className='absolute inset-0 h-full w-full object-cover'
          muted
          autoPlay
          loop
          playsInline
          preload='auto'
        >
          <source src={media.src} />
        </video>
      ) : (
        <Image
          src={media.src}
          alt={media.alt ?? ''}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
      )}

      <div className='absolute inset-0 bg-linear-0 from-black to-black/30' />

      <div className='relative z-10 flex h-full flex-col gap-2 justify-end lg:px-8 text-white'>
        {showLogo && (
          <Logo className='logo-animation w-24 h-24 md:w-64 md:h-64' />
        )}

        {subtitle && (
          <h2 className='max-w-3xl text-3xl text-zinc-400 font-normal'>
            {subtitle}
          </h2>
        )}

        {title && (
          <h1 className='max-w-4xl text-5xl tracking-tight font-medium'>
            {title}
          </h1>
        )}

        {description && (
          <p className='max-w-lg text-xl font-light font-sans-alt'>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
