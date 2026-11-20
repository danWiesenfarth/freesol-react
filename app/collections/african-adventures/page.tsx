import PhotoGrid from '@/components/Photography/PhotoGrid';
import { africaPhotos } from '@/data/continents/africa.data';
import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';
import { continentsData } from '@/data/continents/continents.data';

export default function AfricanAdventures() {
  return (
    <main>
      <Hero heroContent={heroContent.africanAdventures} />
      <section className='mt-10 text-amber-500 w-full px-4 lg:px-10'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-4xl uppercase font-semibold'>
            African Adventures
          </h2>
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
        </div>
        <PhotoGrid photos={africaPhotos} />
        <div className='h-px w-full bg-zinc-200 mt-8'></div>
      </section>
      <section className='w-full px-4 lg:px-10 my-6'>
        <h2 className='text-3xl mb-4 font-semibold text-zinc-900'>
          Discover more of our work
        </h2>
        <ProjectsOverview content={continentsData} />
      </section>
    </main>
  );
}
