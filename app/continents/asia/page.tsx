import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { collectionsData } from '@/data/collections/collection.data';
import Layout from '@/components/Layout/Layout';
import { asiaPhotos } from '@/data/continents/asia.data';

export default function AsiaPage() {
  return (
    <main>
      <Hero heroContent={heroContent.asia} />
      <Layout>
        <PhotoGrid photos={asiaPhotos} />
        <ProjectsOverview content={collectionsData} />
      </Layout>
    </main>
  );
}
