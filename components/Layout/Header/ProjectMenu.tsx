'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useScroll } from '@/context/ScrollContext';
interface MenuProps {
  content?: {
    title: string;
    description?: string;
    link: string;
    thumbnail: string;
  }[];
  buttonVisible?: boolean;
  buttonLabel?: string;
}

export default function ProjectMenu({
  content = [],
  buttonVisible = true,
  buttonLabel = 'View All',
}: MenuProps) {
  const { scrolled } = useScroll();

  return (
    <div className='absolute top-full left-0 w-[450px] pt-[30px]'>
      <div
        className={`
          flex flex-col gap-2 p-4 rounded-lg
          transition-all duration-500 ease-in-out
          ${
            scrolled
              ? 'bg-zinc-200/100 backdrop-blur-md shadow-sm text-zinc-900 rounded-t-none'
              : 'bg-zinc-200/20 backdrop-blur-md text-zinc-200'
          }
        `}
      >
        {content.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            className={`
              group/item flex items-start justify-between gap-6
              pl-2 rounded
              transition-all duration-500 ease-in-out
              ${scrolled ? 'hover:bg-zinc-300/60' : 'hover:bg-zinc-300/30'}
            `}
          >
            <div className='flex flex-col gap-1 flex-1 pt-2'>
              <h3 className='font-semibold text-xl'>{project.title}</h3>

              <p
                className={`
                  text-sm transition-colors duration-500 font-sans-alt
                  ${scrolled ? 'text-zinc-500' : 'text-zinc-200'}
                `}
              >
                {project.description}
              </p>
            </div>

            <div className='relative w-64 aspect-[3/2] shrink-0 overflow-hidden rounded-md'>
              <Image
                fill
                src={project.thumbnail}
                alt={project.title}
                sizes='256px'
                quality={90}
                className='object-cover transition-transform duration-500 group-hover/item:scale-105'
              />
            </div>
          </Link>
        ))}
        {buttonVisible && (
          <Link
            className='mt-4 ml-auto py-2 px-4 font-medium hover:bg-zinc-100 rounded hover:text-zinc-800'
            href='/collections'
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
