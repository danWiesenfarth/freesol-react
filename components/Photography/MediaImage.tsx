import Image from 'next/image';
import type { ImageSettings } from '@/data/interfaces/media.interface';

interface MediaImageProps {
  src: string;
  alt: string;
  settings?: ImageSettings;
  sizes?: string;
  quality?: number;
  className?: string;
}

export default function MediaImage({
  src,
  alt,
  settings,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
  quality = 90,
  className = '',
}: MediaImageProps) {
  const focalPoint = settings?.focalPoint;

  return (
    <div className='relative h-full w-full'>
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        sizes={sizes}
        className={`media-image object-cover ${className}`}
        style={
          {
            '--focal-desktop': focalPoint?.desktop ?? '50% 50%',
            '--focal-tablet':
              focalPoint?.tablet ?? focalPoint?.desktop ?? '50% 50%',
            '--focal-mobile':
              focalPoint?.mobile ??
              focalPoint?.tablet ??
              focalPoint?.desktop ??
              '50% 50%',
          } as React.CSSProperties
        }
      />
    </div>
  );
}
