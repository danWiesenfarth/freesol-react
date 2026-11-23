import Hero from '@/components/Layout/landing-page/Hero';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import Layout from './Layout';
import { continentsData } from '@/data/continents/continents.data';

import type { HeroProps } from '@/data/interfaces/hero.interface';
import type { PhotoProps } from '@/data/interfaces/photo.interface';

interface PhotoPageProps {
  hero: HeroProps['heroContent'];
  photos: PhotoProps[];
  projects: typeof continentsData;
}

export default function PhotoPage({ hero, photos, projects }: PhotoPageProps) {
  return (
    <main>
      <Hero heroContent={hero} />
      <Layout>
        <PhotoGrid photos={photos} />
        <ProjectsOverview content={projects} />
      </Layout>
    </main>
  );
}
