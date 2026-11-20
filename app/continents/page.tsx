import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import ChevronLeft from '@/components/UI/ChevronLeft';

import { continentsData } from '@/data/continents.data';
import Image from 'next/image';
import Link from 'next/link';

export default function ContinentsPage() {
  return (
    <main>
      <section className='w-full px-4 lg:px-16'>
        <div className=' mt-24 md:mt-36 flex gap-4 items-center'>
          <Link
            href='/'
            className='rounded flex items-center gap-1 px-3 py-3 hover:bg-zinc-100'
            aria-label='Go back'
          >
            <ChevronLeft />
          </Link>

          <div>
            <h1 className='text-4xl font-semibold'>Continents</h1>
            <span className='text-zinc-600 font-sans-alt hidden md:block'>
              Explore by Destination
            </span>
          </div>
        </div>

        <ol className='flex flex-col my-4 gap-2 md:grid md:grid-cols-2'>
          {continentsData.map((continent) => (
            <li key={continent.link}>
              <Link
                href={continent.link}
                className='group relative block h-96 md:h-128 w-full overflow-hidden rounded'
              >
                <Image
                  src={continent.thumbnail}
                  alt={continent.title}
                  fill
                  sizes='100vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40' />

                <div className='absolute inset-0 flex items-end p-6 lg:p-10'>
                  <h2 className='text-3xl font-semibold text-white'>
                    {continent.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className='mt-10  w-full px-4 lg:px-16'>
        <ProjectsOverview />
      </section>
    </main>
  );
}
