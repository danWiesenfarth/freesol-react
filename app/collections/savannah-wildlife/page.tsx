import PhotoGrid from '@/components/Photography/PhotoGrid';
import { frozenLandscapes } from '@/data/collections/frozen-landscape.data';
import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { continentsData } from '@/data/continents/continents.data';
import Layout from '@/components/Layout/Layout';

export default function SavannahWildlife() {
  return (
    <main className='w-full min-h-screen bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.savannahWildlife} />
      <Layout>
        <section className='mt-10 w-full'>
          <p className='font-sans-alt font-medium leading-tight text-xl text-zinc-500 max-w-[55ch] text-pretty'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

          <PhotoGrid photos={frozenLandscapes} />
        </section>

        <ProjectsOverview content={continentsData} />
      </Layout>
    </main>
  );
}
