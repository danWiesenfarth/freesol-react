'use client';

import { useState } from 'react';
import Photo from './Photo';
import Lightbox from './Lightbox';
import type { PhotoProps } from '../../data/interfaces/photo.interface';

interface PhotoGridProps {
  photos: PhotoProps[];
  className?: string;
}

export default function PhotoGrid({ photos, className = '' }: PhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section
        className={`
          mx-auto my-8 grid
          grid-cols-12 auto-rows-[160px] gap-3
          max-[1024px]:grid-cols-6
          max-[1024px]:auto-rows-[120px]
          max-[640px]:grid-cols-1
          max-[640px]:auto-rows-[180px]
          max-w-[1920px]
          ${className}
        `}
      >
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type='button'
            onClick={() => setActiveIndex(index)}
            aria-label={`Open photo: ${photo.title}`}
            className='
              relative min-w-0 overflow-hidden text-left
              col-span-3 row-span-4
              min-[1032px]:col-span-(--span-col)
              min-[1032px]:row-span-(--span-row)
              max-[640px]:col-span-1
              max-[640px]:row-span-3
            '
            style={
              {
                '--span-col': photo.spanCol,
                '--span-row': photo.spanRow,
              } as React.CSSProperties
            }
          >
            <Photo {...photo} />
          </button>
        ))}
      </section>

      <Lightbox
        photos={photos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
