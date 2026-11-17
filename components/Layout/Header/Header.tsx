'use client';

import Link from 'next/link';
import { useScroll } from '@/context/ScrollContext';
import Logo from '../../UI/Logo';
import { useState, useEffect } from 'react';
import MenuToggle from '../../UI/MenuToggle';

import ProjectMenu from './ProjectMenu';
import ArrowDown from '@/components/UI/ArrowDown';
import ArrowUp from '@/components/UI/ArrowUp';

import {
  collectionsHeaderPreview,
  continentsHeaderPreview,
} from '@/data/photos.data';

export default function Header() {
  const { scrolled, headerVisible } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

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
  function handleDropdown() {
    setProjectsExpanded((prev) => !prev);
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
              ? 'top-5 w-[92vw] rounded-lg bg-zinc-200/100 backdrop-blur-md shadow-sm px-8 text-zinc-900'
              : 'top-0 bg-transparent pt-6 w-screen px-16 text-zinc-200'
          }
        `}
      >
        <div className='flex gap-4 items-center'>
          {scrolled ? (
            <Link href='/'>
              <Logo className={scrolled ? 'w-12 h-12' : 'w-16 h-16'} />
            </Link>
          ) : (
            ''
          )}
          <Link href='/'>
            <span className='text-2xl tracking-tight font-bold'>
              FREESOL CREATIVES
            </span>
          </Link>
        </div>

        <nav>
          <ol className='flex gap-6 text-xl font-medium lg:mr-24'>
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
                <ProjectMenu content={collectionsHeaderPreview} />
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
                <ProjectMenu content={continentsHeaderPreview} buttonVisible />
              </div>
            </li>
            <li className={navLinkClasses}>
              {scrolled ? (
                ''
              ) : (
                <span className='absolute bottom-6 font-sans-alt bg-amber-500 left-8 py-1 px-2 text-[13px] font-bold text-zinc-900 rounded-4xl'>
                  NEW
                </span>
              )}
              <Link href='/gallery'>Gallery</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href='/shop'>Shop</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href='/about'>About</Link>
            </li>
            <li className={navLinkClasses}>
              <Link href='/contact'>Contact</Link>
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
              ? 'w-[92vw] px-6 bg-zinc-200'
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
          <nav className='flex flex-col justify-start h-full w-full'>
            {/* PROJECTS DROPDOWN */}
            <div>
              <button
                onClick={handleDropdown}
                aria-expanded={projectsExpanded}
                className='w-full p-8  mt-32 flex justify-between items-center'
              >
                <span className='text-zinc-400 text-xl font-sans-alt'>01</span>

                <div className='flex justify-center items-center gap-2'>
                  <div>{projectsExpanded ? <ArrowUp /> : <ArrowDown />}</div>
                  <span className='text-4xl font-medium'>Collections</span>
                </div>
              </button>

              {/* SUBPAGES */}
              <div
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${projectsExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                `}
              >
                <div className='overflow-hidden'>
                  <div className='flex flex-col gap-3 px-8 py-4 items-end text-2xl font-medium'>
                    <Link
                      href='/collections'
                      onClick={() => setMenuOpen(false)}
                    >
                      Continents
                    </Link>

                    <Link href='/gallery' onClick={() => setMenuOpen(false)}>
                      Gallery
                    </Link>

                    <Link
                      href='/collections/other'
                      onClick={() => setMenuOpen(false)}
                    >
                      Other Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* OTHER NAVIGATION LINKS */}
            <Link
              className='px-8 py-8 flex justify-between items-center'
              href='/gallery'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>02</span>
              <span className='text-4xl font-medium'>Gallery</span>
            </Link>

            <Link
              className='px-8 py-8 flex justify-between items-center'
              href='/collections'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>03</span>
              <span className='text-4xl font-medium'>Shop </span>
            </Link>

            <Link
              className='px-8 py-8 flex justify-between items-center'
              href='/about'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>04</span>
              <span className='text-4xl font-medium'>About</span>
            </Link>

            <Link
              className='px-8 py-8 flex justify-between items-center'
              href='/contact'
              onClick={() => setMenuOpen(false)}
            >
              <span className='text-zinc-400 text-xl font-sans-alt'>05</span>
              <span className='text-4xl font-medium'>Contact</span>
            </Link>

            <div className='flex flex-col gap-2 w-full justify-center items-center mb-24 mt-12 text-base font-sans-alt'>
              <Link href='/impressum'>Impressum</Link>
              <Link href='/privacy'>Privacy</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
