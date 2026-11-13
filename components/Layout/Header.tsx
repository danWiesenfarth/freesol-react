'use client';

import Link from 'next/link';
import { useScroll } from '@/app/context/ScrollContext';
import Logo from '../UI/Logo';

export default function Header() {
  const { scrolled, headerVisible } = useScroll();

  const visibilityClasses = headerVisible
    ? 'translate-y-0 opacity-100'
    : '-translate-y-[150%] opacity-0 pointer-events-none';

  const navLinkClasses = `
    relative after:absolute after:bottom-0 after:left-0
    after:h-[1px] after:w-full after:origin-left
    after:scale-x-0 after:bg-current
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `;

  return (
    <header>
      {/* DESKTOP HEADER */}
      <div
        className={`
          hidden md:flex justify-between left-1/2 items-center
          fixed z-[9000] h-22 -translate-x-1/2
          transition-all duration-500 ease-in-out
          ${visibilityClasses}
          ${
            scrolled
              ? 'top-5 w-[92vw] rounded-lg bg-zinc-200/70 backdrop-blur-md shadow-sm px-8 text-zinc-900'
              : 'top-0 bg-transparent pt-6 w-screen px-16 text-zinc-200'
          }
        `}
      >
        <div className='flex gap-4 items-center'>
          <Logo className={scrolled ? 'w-12 h-12' : 'w-16 h-16'} />
          <span className='text-xl font-bold'>FREESOL CREATIVES</span>
        </div>

        <nav>
          <ol className='flex gap-6 text-xl font-medium lg:mr-48'>
            <li className={navLinkClasses}>
              <Link href='/photography'>PROJECTS</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href='/projects'>EXHIBITION</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href='/projects'>STORE</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href='/projects'>CONTACT</Link>
            </li>
          </ol>
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div
        className={`
          md:hidden fixed z-[9000] left-1/2 top-3
          flex justify-between items-center
          -translate-x-1/2 rounded-md py-2
          transition-all duration-500 ease-in-out
          ${visibilityClasses}
          ${
            scrolled
              ? 'w-[92vw] px-6 bg-zinc-200/70 backdrop-blur-md'
              : 'w-[92vw] px-2 text-zinc-200'
          }
        `}
      >
        <Logo className='w-10 h-10' />
        <button aria-label='Open menu'>=</button>
      </div>
    </header>
  );
}
