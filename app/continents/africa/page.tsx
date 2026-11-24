import PhotoGrid from '@/components/Photography/PhotoGrid';
import { frozenLandscapes } from '@/data/collections/frozen-landscape.data';
import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import Layout from '@/components/Layout/Layout';
import { collectionsData } from '@/data/collections/collection.data';
import { africaPhotos } from '@/data/continents/africa.data';

export default function AfricaPage() {
  return (
    <main className='w-full min-h-screen bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.africa} />
      <Layout>
        <PhotoGrid photos={africaPhotos} />
        <ProjectsOverview content={collectionsData} />
      </Layout>
    </main>
  );
}
