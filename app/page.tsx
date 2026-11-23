'use client';

import Hero from '@/components/Layout/landing-page/Hero';
import PhotoGrid from '@/components/Photography/PhotoGrid';

import { latestCollection } from '@/data/photos.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';

import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/data/pages.data';
import { continentsData } from '@/data/continents/continents.data';
import ChevronRight from '@/components/UI/ChevronRight';

export default function Home() {
  return (
    <main className='flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.home} />
      <section className='mt-10 w-full px-4 lg:px-10'>
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
      <section className='mt-10 text-zinc-800 w-full px-4 lg:px-10 flex flex-col lg:flex-row justify-between gap-4'>
        <div>
          <h2 className='text-3xl uppercase font-semibold'>
            Immersive 3D Exhibition
          </h2>
          <p className='font-sans-alt font-medium text-base text-zinc-500 max-w-[55ch] text-pretty'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <Link href='/'>
            <button className='  px-6 py-3 bg-zinc-900 text-zinc-50 mt-4 rounded font-sans-alt font-bold cursor-pointer flex items-center gap-2 hover:scale-105 transition-all 300ms hover:bg-amber-500 hover:text-zinc-900 hover:border-r-4 hover:border-b-4'>
              <span> Take Me to the Art Gallery</span>
              <ChevronRight />
            </button>
          </Link>
        </div>
        <div className='relative w-full lg:flex-1 min-w-0 aspect-[2/3] max-h-[700px] lg:aspect-[4/3] lg:max-h-none overflow-hidden'>
          <Image
            fill
            src='/images/renders/Savannah_2.png'
            alt='Lion'
            className='object-cover'
            sizes='(max-width: 1023px) 100vw, 50vw'
          />
        </div>
      </section>

      <ProjectsOverview content={continentsData} />
    </main>
  );
}
