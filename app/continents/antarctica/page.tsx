import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { americaPhotos } from '@/data/continents/america.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { collectionsData } from '@/data/collections/collection.data';
import Layout from '@/components/Layout/Layout';
import { frozenLandscapes } from '@/data/collections/frozen-landscape.data';

export default function AntarcticaPage() {
  return (
    <main>
      <Hero heroContent={heroContent.antarctica} />
      <Layout>
        <PhotoGrid photos={frozenLandscapes} />
        <ProjectsOverview content={collectionsData} />
      </Layout>
    </main>
  );
}
