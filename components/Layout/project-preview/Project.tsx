import Image from 'next/image';
import Link from 'next/link';

import type { PhotoProjectPreview } from '@/data/photo.interface';

export default function Project({
  src,
  alt,
  title,
  meta,
  thumbnail,
}: PhotoProjectPreview) {
  return (
    <Link href={src} className='group block px-2'>
      <div className='relative aspect-[4/5] overflow-hidden'>
        <Image
          src={thumbnail}
          alt={alt}
          fill
          sizes='(max-width: 768px) 33vw, 33vw'
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />
      </div>

      <div className='mt-4'>
        <h2 className='text-3xl'>{title}</h2>
        <p>{meta}</p>
      </div>
    </Link>
  );
}
