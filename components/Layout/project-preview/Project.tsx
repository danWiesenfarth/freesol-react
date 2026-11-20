import Link from 'next/link';
import MediaImage from '@/components/Photography/MediaImage';

import type { PhotoProjectPreview } from '@/data/interfaces/photo.interface';

export default function Project({
  src,
  alt,
  title,
  description,
  thumbnail,
  imageSettings,
}: PhotoProjectPreview) {
  return (
    <Link href={src} className='group block px-2'>
      <div className='relative aspect-[4/5] overflow-hidden'>
        <MediaImage
          src={thumbnail}
          alt={alt}
          settings={imageSettings}
          sizes='(max-width: 768px) 33vw, 33vw'
          className='transition-transform duration-700 group-hover:scale-105'
        />
      </div>

      <div className='mt-4'>
        <h2 className='text-3xl'>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
