import Link from 'next/link';
import Logo from '../UI/Logo';

export default function Footer() {
  return (
    <footer className='relative px-6 py-6 bg-zinc-900 text-zinc-200 h-164 flex flex-col justify-center items-center gap-2'>
      <Logo className='w-84 h-84 absolute left-24' />
      <span>FREESOL CREATIVES</span>
      <Link className='text-xl' href='mailto:info@freesolcreatives.com'>
        info@freesolcreatives.com
      </Link>
      <div className='flex gap-2'>
        <Link
          className='text-base font-sans-alt'
          href='mailto:info@freesolcreatives.com'
        >
          Impressum
        </Link>
        <Link
          className='text-base font-sans-alt'
          href='mailto:info@freesolcreatives.com'
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
