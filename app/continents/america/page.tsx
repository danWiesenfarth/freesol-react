import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { americaPhotos } from '@/data/continents/america.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { collectionsData } from '@/data/collections/collection.data';

export default function AmericaPage() {
  return (
    <main>
      <Hero heroContent={heroContent.america} />
      <section className='mt-10 w-full px-4 lg:px-10'>
        <PhotoGrid photos={americaPhotos} />
      </section>

      <ProjectsOverview content={collectionsData} />
    </main>
  );
}
