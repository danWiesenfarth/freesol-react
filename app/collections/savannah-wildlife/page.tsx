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
          <Soundtrack
            soundtrack={savannahWildlifeMetadata.soundtrack}
            hasConsent={true}
            onOpenConsentSettings={() => {}}
          />
        )}
        <PhotoGrid photos={savannahWildlife} />

        <ProjectsOverview content={continentsData} />
      </Layout>
    </main>
  );
}
