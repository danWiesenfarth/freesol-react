'use client';

import { useState } from 'react';
import Photo from './Photo';
import Lightbox from './Lightbox';
import type { PhotoProps } from '../../data/interfaces/photo.interface';

interface PhotoGridProps {
  photos: PhotoProps[];
  className?: string;
}

function getPhotoSizes(spanCol: number = 3) {
  const desktopSpan = Math.min(spanCol, 12);
  const tabletSpan = Math.min(spanCol, 6);

  const desktopPercentage = (desktopSpan / 12) * 100;
  const tabletPercentage = (tabletSpan / 6) * 100;

  return [
    `(max-width: 640px) 100vw`,
    `(max-width: 1024px) ${tabletPercentage}vw`,
    `(max-width: 1920px) ${desktopPercentage}vw`,
    `${Math.round((1920 * desktopSpan) / 12)}px`,
  ].join(', ');
}

export default function PhotoGrid({ photos, className = '' }: PhotoGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <section
        className={`
          my-8 grid w-full max-w-[1920px]
          grid-cols-12 auto-rows-[160px] gap-3
          max-[1024px]:grid-cols-6
          max-[1024px]:auto-rows-[120px]
          max-[640px]:grid-cols-1
          max-[640px]:auto-rows-[180px]
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
              min-[1025px]:col-span-(--span-col)
              min-[1025px]:row-span-(--span-row)
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
            <Photo {...photo} sizes={getPhotoSizes(photo.spanCol ?? 3)} />
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
