import Hero from '@/components/Layout/landing-page/Hero';
import { heroContent } from '@/data/pages.data';
export default function EyeInTheSky() {
  return (
    <main className='flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans'>
      <Hero heroContent={heroContent.africanAdventures} />
      <section className='bg-zinc-50'>
        <h1>Eye in The Sky</h1>
      </section>
    </main>
  );
}
