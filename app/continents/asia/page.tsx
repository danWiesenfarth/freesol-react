import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
import PhotoGrid from '@/components/Photography/PhotoGrid';
import { asiaPhotos } from '@/data/continents/asia.data';

export default function AsiaPage() {
  return (
    <main>
      <Hero heroContent={heroContent.asia} />
      <section className='mt-10 w-full px-4 lg:px-10'>
        <PhotoGrid photos={asiaPhotos} />
      </section>
    </main>
  );
}
