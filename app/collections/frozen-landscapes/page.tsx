import PhotoGrid from '@/components/Photography/PhotoGrid';
import {
  frozenLandscapes,
  frozenLandscapesMetadata,
} from '@/data/collections/frozen-landscape.data';
import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { continentsData } from '@/data/continents/continents.data';
import Layout from '@/components/Layout/Layout';
import Soundtrack from '@/components/Spotify/Soundtrack';

export default function FrozenLandscapes() {
  return (
    <main className='w-full min-h-screen bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.frozenLandscapes} />
      <Layout>
        {frozenLandscapesMetadata.soundtrack && (
          <div className='flex flex-col md:flex-row gap-2'>
            <div className='flex-1 mb-4 '>
              <h2 className='text-3xl uppercase font-semibold mb-2'>
                Yeah, it was cold
              </h2>
              <div className='text-lg leading-tight font-medium font-sans-alt text-zinc-700 max-w-[50ch] text-pretty'>
                From the coldest reaches of Antarctica to the nothern lights in
                Greenland, in our coolest collection to date, we bring you lots
                of snow, ice, surreal and beautiful landscapes. And lots of
                Penguins.
              </div>
            </div>
            <div className='flex-1'>
              <span className='text-lg uppercase tracking-widest text-zinc-500'>
                Recommended soundtrack
              </span>
              <Soundtrack soundtrack={frozenLandscapesMetadata.soundtrack} />
            </div>
          </div>
        )}
        <PhotoGrid photos={frozenLandscapes} />
        <ProjectsOverview content={continentsData} />
      </Layout>
    </main>
  );
}
