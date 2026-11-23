import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { americaPhotos } from '@/data/continents/america.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { collectionsData } from '@/data/collections/collection.data';
import PhotoPage from '@/components/Layout/PhotoPage';

export default function OceaniaPage() {
  return (
    <PhotoPage
      hero={heroContent.africanAdventures}
      photos={americaPhotos}
      projects={collectionsData}
    />
  );
}
