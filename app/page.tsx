'use client';

import Hero from '@/components/Layout/landing-page/Hero';
import PhotoGrid from '@/components/Photography/PhotoGrid';

import { latestCollection } from '@/data/photos.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';

import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/data/pages.data';
import { continentsData } from '@/data/continents/continents.data';

export default function Home() {
  return (
    <main className='flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.home} />
      <section className='mt-10 w-full px-4 lg:px-16'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-3xl uppercase font-semibold'>
            The Frozen Collection
          </h2>
          <p className='font-sans-alt font-medium text-base text-zinc-500 max-w-[55ch] text-pretty'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        <PhotoGrid photos={latestCollection} />
        <div className='h-px w-full bg-zinc-200 mt-8'></div>
      </section>
      <section className='mt-10 text-zinc-800 w-full px-4 lg:px-16'>
        <h2 className='text-3xl uppercase font-semibold'>
          Immersive 3D Exhibition
        </h2>
        <p className='font-sans-alt font-medium text-base text-zinc-500 max-w-[55ch] text-pretty'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </section>
      <section className='relative w-full my-6 h-[90vh] overflow-hidden'>
        <Image
          fill
          className='object-cover'
          src='/images/renders/Savannah_2.png'
          alt='Lion'
        />

        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

        {/* Heading */}
        <div className='absolute inset-0 flex items-end justify-center pb-16'>
          <Link href='gallery'>
            <button className='bg-zinc-200 rounded-xl flex justify-center items-center py-2 px-12 text-xl font-semibold text-zinc-900  text-center cursor-pointer hover:border-r-4 hover:border-b-4 border-sky-800'>
              Enter The Exhibition
            </button>
          </Link>
        </div>
      </section>
      <section className='w-full px-4 lg:px-16 my-6'>
        <h2 className='text-3xl mb-4 font-semibold text-zinc-900'>
          Discover more of our work
        </h2>
        <ProjectsOverview content={continentsData} />
      </section>
    </main>
  );
}
