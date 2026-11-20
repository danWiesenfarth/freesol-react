import Image from 'next/image';
import { PhotoProps } from '../../data/photo.interface';

export default function Photo({
  src,
  alt,
  title,
  location,
  focalPoint,
}: PhotoProps) {
  return (
    <div
      className='group relative h-full w-full overflow-hidden hover:cursor-zoom-in'
      style={
        {
          '--focal-desktop': focalPoint?.desktop ?? 'center',
          '--focal-tablet':
            focalPoint?.tablet ?? focalPoint?.desktop ?? 'center',
          '--focal-mobile':
            focalPoint?.mobile ??
            focalPoint?.tablet ??
            focalPoint?.desktop ??
            'center',
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={90}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className='photo-image object-cover transition-transform duration-700 group-hover:scale-105'
      />

      <div
        className='
          absolute inset-0 z-10
          flex flex-col justify-end
          bg-gradient-to-t from-black/60 via-black/10 to-transparent
          p-5 opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        '
      >
        <div className='translate-y-2 transition-transform duration-300 group-hover:translate-y-0'>
          <h3 className='text-2xl font-medium text-white'>{title}</h3>
          <p className='mt-1 font-sans-alt text-xs uppercase tracking-wider text-white/70'>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
