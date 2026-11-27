import Link from 'next/link';
import Logo from '../UI/Logo';
import FooterLogo from '../UI/FooterLogo';

export default function Footer() {
  return (
    <footer className='relative px-6 pt-12 md:px-24 md:pt-28 bg-zinc-100 text-zinc-900 h-full md:min-h-[70dvh] flex flex-col gap-4 items-center overflow-hidden'>
      <nav className='flex flex-col md:flex-row w-fit md:w-full gap-4'>
        <div className='flex flex-col md:flex-row w-full gap-8'>
          <div>
            <h4 className='text-xl mb-2 bg-zinc-800 py-1 px-4 text-zinc-100 font-mono uppercase tracking-widest'>
              Navigation
            </h4>
            <ol className='text-lg flex flex-col gap-1 pl-4'>
              <li className=' font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>Collections</Link>
              </li>
              <li className=' font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>Continents</Link>
              </li>
              <li className=' font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>Gallery</Link>
              </li>
              <li className='font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>Shop</Link>
              </li>
              <li className=' font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>About</Link>
              </li>
            </ol>
          </div>

          <div>
            <h4 className='text-xl mb-2 bg-zinc-800 py-1 px-4 text-zinc-100 font-mono uppercase tracking-widest text-center'>
              Legal
            </h4>
            <ol className='flex flex-col gap-1 pl-4 text-lg'>
              <li className='font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>Imprint</Link>
              </li>
              <li className=' font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>GDPR</Link>
              </li>
              <li className='font-sans-alt text-zinc-700 hover:underline'>
                <Link href='/'>Cookies</Link>
              </li>
            </ol>
          </div>

          <div>
            <h4 className='text-xl mb-2 bg-zinc-800 py-1 px-4 text-zinc-100 font-mono uppercase tracking-widest text-center'>
              CONTACT US
            </h4>
            <a
              href='mailto:hello@freesolcreatives.com'
              className='font-sans-alt text-zinc-700 text-lg underline'
            >
              hello@freesolcreatives.com
            </a>
          </div>
        </div>
        <div className='flex flex-col text-zinc-200 my-4 items-center gap-2'>
          <Logo className='logo-animation w-24 h-24 md:w-64 md:h-64' />
          <span className='uppercase text-zinc-400 font-medium font-sans-alt '>
            © Freesol Creatives 2026
          </span>
        </div>
      </nav>
      <div className='hidden md:block h-0.5 bg-zinc-200 w-full my-12'></div>
      <div className='hidden mt-auto md:flex justify-end w-full text-zinc-200'>
        <FooterLogo className='' />
      </div>
    </footer>
  );
}
