'use client';

import Hero from '@/components/Layout/landing-page/Hero';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { PhotoProps } from '@/data/photo.interface';
import { useEffect, useState } from 'react';
import { latestCollection } from '@/data/photos.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <main className='flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-zinc-50'>
      <Hero />
      <section className='mt-10 text-zinc-800 w-full px-4 lg:px-16'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-3xl uppercase font-semibold'>
            The Frozen Collection
          </h2>
          <p className='font-sans-alt text-xl text-zinc-700 max-w-[55ch] text-pretty'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <PhotoGrid photos={latestCollection} />
        <div className='h-px w-full bg-zinc-200 mt-8'></div>
      </section>
      <section className='w-full px-4 lg:px-16 my-6 bg-zinc-800 h-screen py-6 text-zinc-200'>
        <h2 className='text-3xl  font-semibold'>Enter the Exhibtion</h2>
      </section>
      <section className='w-full px-4 lg:px-16 my-6'>
        <h2 className='text-3xl mb-4 font-semibold text-zinc-900'>
          Discover more of our work
        </h2>
        <ProjectsOverview />
      </section>
    </main>
  );
}
