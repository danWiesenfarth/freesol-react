import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { americaPhotos } from '@/data/continents/america.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { collectionsData } from '@/data/collections/collection.data';
import Layout from '@/components/Layout/Layout';

export default function OceaniaPage() {
  return (
    <main>
      <Hero heroContent={heroContent.oceania} />
      <Layout>
        <PhotoGrid photos={americaPhotos} />
        <ProjectsOverview content={collectionsData} />
      </Layout>
    </main>
  );
}
