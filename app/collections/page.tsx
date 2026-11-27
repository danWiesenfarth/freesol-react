import Layout from '@/components/Layout/Layout';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import ChevronLeft from '@/components/UI/ChevronLeft';
import { collectionsData } from '@/data/collections/collection.data';
import { continentsData } from '@/data/continents/continents.data';
import Image from 'next/image';
import Link from 'next/link';

export default function CollectionsPage() {
  return (
    <main className='  flex flex-col items-center'>
      <Layout>
        <div className=' mt-24 md:mt-36 flex gap-4 items-center'>
          <Link
            href='/'
            className='rounded flex items-center gap-1 px-3 py-3 hover:bg-zinc-100'
            aria-label='Go back'
          >
            <ChevronLeft />
          </Link>

          <div>
            <h1 className='text-4xl font-semibold'>Collections</h1>
            <span className='text-zinc-600 font-sans-alt hidden md:block'>
              Explore by Collection
            </span>
          </div>
        </div>

        <ol className='flex flex-col my-4 gap-2 md:grid md:grid-cols-1'>
          {collectionsData.map((collection) => (
            <li key={collection.src}>
              <Link
                href={collection.src}
                className='group relative block h-96 md:h-128 w-full overflow-hidden rounded'
              >
                <Image
                  src={collection.thumbnail}
                  alt={collection.title}
                  fill
                  sizes='100vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40' />

                <div className='absolute inset-0 flex items-end p-6 lg:p-10'>
                  <h2 className='text-3xl font-semibold text-white'>
                    {collection.title}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <ProjectsOverview content={continentsData} />
      </Layout>
    </main>
  );
}
