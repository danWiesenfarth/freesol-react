'use client';

import Link from 'next/link';
import { useScroll } from '@/app/context/ScrollContext';
import Logo from '../UI/Logo';
import { useState, useEffect } from 'react';
import MenuToggle from '../UI/MenuToggle';

export default function Header() {
  const { scrolled, headerVisible } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

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

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    const previousOverflow = (document.body.style.overflow = menuOpen
      ? 'hidden'
      : '');

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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
          ${menuOpen ? 'text-zinc-900' : ''}
        `}
      >
        <Logo className='w-10 h-10' />
        <button onClick={handleMenuToggle} aria-label='Open menu'>
          <MenuToggle isOpen={menuOpen} />
        </button>
      </div>

      {/* MOBILE MENU SHOWS WHEN MENUOPEN TRUTHY */}

      {menuOpen && (
        <div className='md:hidden fixed inset-0 z-[8999] bg-zinc-200 text-zinc-900 '>
          <nav className='flex flex-col justify-end h-full w-full'>
            <Link
              className=' px-8 pt-24 flex justify-between items-center'
              href='/projects'
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>01</span>
              <span className='text-4xl font-medium'>Projects</span>
            </Link>
            <div className='h-px mt-4 bg-zinc-300 w-full'> </div>
            <Link
              className=' px-8 pt-8 flex justify-between items-center'
              href='/projects'
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>02</span>
              <span className='text-4xl font-medium'>Immersive Gallery</span>
            </Link>
            <div className='h-px mt-4 bg-zinc-300 w-full'> </div>
            <Link
              className=' px-8 pt-8 flex justify-between items-center'
              href='/projects'
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>03</span>
              <span className='text-4xl font-medium'>Shop (SOON)</span>
            </Link>
            <div className='h-px mt-4 bg-zinc-300 w-full'> </div>
            <Link
              className=' px-8 pt-8 flex justify-between items-center'
              href='/projects'
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>04</span>
              <span className='text-4xl font-medium'>About Us</span>
            </Link>
            <div className='h-px mt-4 bg-zinc-300 w-full'> </div>
            <Link
              className=' px-8 pt-8 flex justify-between items-center'
              href='/projects'
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>05</span>
              <span className='text-4xl font-medium'>Contact</span>
            </Link>
            <div className='h-px mt-4 bg-zinc-300 w-full'> </div>

            <div className='flex flex-col gap-2 w-full justify-center items-center mb-24 mt-12 text-base font-sans-alt'>
              <Link href='/impressum'>Impressum</Link>
              <Link href='/impressum'>Privacy</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
