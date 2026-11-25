'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useScroll } from '@/context/ScrollContext';
import Logo from '@/components/UI/Logo';
import MenuToggle from '@/components/UI/MenuToggle';
import ProjectMenu from './ProjectMenu';

import { continentsData } from '@/data/continents/continents.data';
import { collectionsData } from '@/data/collections/collection.data';

// Pages with dark hero backgrounds that need light text.
const lightHeaderRoutes = ['/'];

export default function Header() {
  const { scrolled, headerVisible } = useScroll();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  // Determine header text color from the current route.
  const isLightHeader =
    lightHeaderRoutes.includes(pathname) ||
    pathname.startsWith('/collections/') ||
    pathname.startsWith('/continents/');

  const headerColor = scrolled
    ? 'text-zinc-900'
    : isLightHeader
      ? 'text-zinc-200'
      : 'text-zinc-900';

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

  // Lock body scrolling while the mobile menu is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = menuOpen ? 'hidden' : '';

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
          fixed z-9000 h-22 -translate-x-1/2
          transition-all duration-500 ease-in-out right-20
          ${visibilityClasses}
          ${headerColor}
          ${
            scrolled
              ? 'top-5 w-[95vw] rounded-lg bg-zinc-100 shadow-sm px-8'
              : 'top-0 bg-transparent pt-6 w-screen px-8 lg:px-12'
          }
        `}
      >
        <div className='flex gap-4 items-center'>
          <Link href='/'>
            <Logo className='w-12 h-12' />
          </Link>

          <Link href='/'>
            <span className='text-2xl tracking-tight font-bold'>
              FREESOL CREATIVES
            </span>
          </Link>
        </div>

        <nav className='mr-36'>
          <ol className='flex gap-6 text-xl font-medium'>
            <li className='relative group'>
              <div className={navLinkClasses}>Collections</div>

              <div
                className={`
                  invisible opacity-0 pointer-events-none
                  group-hover:visible group-hover:opacity-100
                  group-hover:pointer-events-auto
                  transition-all duration-300 ease-in-out
                `}
              >
                <ProjectMenu
                  content={collectionsData.slice(0, 3)}
                  isLightHeader={!isLightHeader}
                />
              </div>
            </li>

            <li className='relative group'>
              <div className={navLinkClasses}>Continents</div>

              <div
                className={`
                  invisible opacity-0 pointer-events-none
                  group-hover:visible group-hover:opacity-100
                  group-hover:pointer-events-auto
                  transition-all duration-300 ease-in-out
                `}
              >
                <ProjectMenu
                  content={continentsData.slice(0, 3)}
                  buttonVisible
                  buttonLink='/continents'
                  isLightHeader={!isLightHeader}
                />
              </div>
            </li>

            <li className={navLinkClasses}>
              {!scrolled && (
                <span className='absolute bottom-6 font-sans-alt bg-amber-500 left-8 py-1 px-2 text-[13px] font-bold text-zinc-900 rounded-4xl'>
                  NEW
                </span>
              )}
              <Link
                href='https://r3-f-artgallery-nu.vercel.app/'
                target='_blank'
              >
                Gallery
              </Link>
            </li>

            <li className={navLinkClasses}>
              <Link href='/shop'>Shop</Link>
            </li>

            <li className={navLinkClasses}>
              <Link href='/about'>About</Link>
            </li>
          </ol>
        </nav>
      </div>

      {/* MOBILE HEADER */}
      <div
        className={`
          md:hidden fixed z-9000 left-1/2 top-3
          flex justify-between items-center
          -translate-x-1/2 rounded-md py-2
          transition-all duration-500 ease-in-out
          ${visibilityClasses}
          ${menuOpen ? 'text-zinc-900' : headerColor}
          w-[92vw]
          ${
            menuOpen
              ? 'px-6 bg-zinc-200'
              : scrolled
                ? 'px-6 bg-zinc-200'
                : 'px-2 bg-transparent'
          }
        `}
      >
        <Link href='/' onClick={() => setMenuOpen(false)}>
          <Logo className='w-10 h-10' />
        </Link>

        <button
          type='button'
          onClick={handleMenuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <MenuToggle isOpen={menuOpen} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className='
            md:hidden fixed inset-0 z-8999
            h-dvh overflow-y-auto overscroll-contain
            bg-zinc-200 text-zinc-900
          '
        >
          <nav
            className='
              flex min-h-full flex-col justify-end
              w-full pt-24
              pb-[calc(6rem+env(safe-area-inset-bottom))]
            '
          >
            <Link
              className='shrink-0 px-8 py-8 flex justify-between items-center'
              href='/collections'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>01</span>
              <span className='text-4xl font-medium'>Collections</span>
            </Link>

            <Link
              className='shrink-0 px-8 py-8 flex justify-between items-center'
              href='/continents'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>02</span>
              <span className='text-4xl font-medium'>Continents</span>
            </Link>

            <Link
              className='shrink-0 px-8 py-8 flex justify-between items-center'
              href='https://r3-f-artgallery-nu.vercel.app/'
              target='_blank'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>03</span>
              <div className='flex gap-2 flex-row-reverse'>
                <span className='text-4xl font-medium'>Gallery</span>
                <div className='flex justify-center items-center font-sans-alt bg-amber-500 py-1 px-2 text-[13px] font-bold text-zinc-900 rounded-4xl'>
                  <span>NEW</span>
                </div>
              </div>
            </Link>

            <Link
              className='shrink-0 px-8 py-8 flex justify-between items-center'
              href='/shop'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>04</span>
              <span className='text-4xl font-medium'>Shop</span>
            </Link>

            <Link
              className='shrink-0 px-8 py-8 flex justify-between items-center'
              href='/about'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>05</span>
              <span className='text-4xl font-medium'>About</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
