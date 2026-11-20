import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { africaPhotos } from '@/data/continents/africa.data';

export default function AfricaPage() {
  return (
    <main>
      <Hero heroContent={heroContent.africanAdventures} />
      <section className='mt-10 w-full px-4 lg:px-16'>
        <PhotoGrid photos={africaPhotos} />
      </section>
    </main>
  );
}
