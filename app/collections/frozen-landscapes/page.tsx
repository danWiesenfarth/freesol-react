import PhotoGrid from '@/components/Photography/PhotoGrid';
import { antarcticaPhotos, latestCollection } from '@/data/photos.data';
import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import ProjectsOverview from '@/components/Layout/project-preview/ProjectsOverview';

export default function FrozenLandscapes() {
  return (
    <main className='flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.frozenLandscapes} />
      <section className='mt-10 text-sky-900 w-full px-4 lg:px-16 '>
        <div className='flex flex-col gap-1'>
          <div className='text-xl uppercase font-semibold flex flex-col gap-2 items-center md:flex-row'>
            <span className='font-sans-alt'>The</span>
            <h2 className='text-sky-800 text-4xl'>FROZEN LANDSCAPES</h2>
            <span className='font-sans-alt'>Collection</span>
            <div />
          </div>
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
        <PhotoGrid photos={antarcticaPhotos} />
        <div className='h-px w-full bg-zinc-200 mt-8'></div>
      </section>
      <section className='w-full px-4 lg:px-16 my-6'>
        <h2 className='text-3xl mb-4 font-semibold text-zinc-900'>
          Discover more of our work
        </h2>
        <ProjectsOverview />
      </section>
    </main>
  );
}
