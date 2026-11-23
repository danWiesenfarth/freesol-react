import Hero from '@/components/Layout/landing-page/Hero';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import Layout from './Layout';

export default function PhotoPage({ hero, photos, projects }) {
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
