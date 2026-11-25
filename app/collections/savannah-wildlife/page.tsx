import PhotoGrid from '@/components/Photography/PhotoGrid';
import Hero from '@/components/Layout/landing-page/Hero';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import Layout from '@/components/Layout/Layout';
import Soundtrack from '@/components/Spotify/Soundtrack';

import { heroContent } from '@/data/pages.data';
import { continentsData } from '@/data/continents/continents.data';

import {
  savannahWildlife,
  savannahWildlifeMetadata,
} from '@/data/collections/savannah-wildlife.data';

export default function SavannahWildlife() {
  return (
    <main className='w-full min-h-screen bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.savannahWildlife} />

      <Layout>
        {savannahWildlifeMetadata.soundtrack && (
          <div className='flex flex-col md:flex-row gap-2'>
            <div className='flex-1 mb-4 '>
              <h2 className='text-3xl uppercase font-semibold mb-2'>
                Subtitle
              </h2>
              <div className='text-lg leading-tight font-medium font-sans-alt text-zinc-700 max-w-[50ch] text-pretty'>
                Introduction
              </div>
            </div>
            <div className='flex-1'>
              <span className='text-lg uppercase tracking-widest text-zinc-500'>
                Recommended soundtrack
              </span>
              <Soundtrack soundtrack={savannahWildlifeMetadata.soundtrack} />
            </div>
          </div>
        )}
        <PhotoGrid photos={savannahWildlife} />

        <ProjectsOverview content={continentsData} />
      </Layout>
    </main>
  );
}
