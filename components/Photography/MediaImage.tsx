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
  return (
    <div
      className='relative h-full w-full'
      style={
        {
          '--focal-desktop': settings?.focalPoint?.desktop ?? 'center',
          '--focal-tablet':
            settings?.focalPoint?.tablet ??
            settings?.focalPoint?.desktop ??
            'center',
          '--focal-mobile':
            settings?.focalPoint?.mobile ??
            settings?.focalPoint?.tablet ??
            settings?.focalPoint?.desktop ??
            'center',
        } as React.CSSProperties
      }
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        sizes={sizes}
        className={`media-image object-cover ${className}`}
      />
    </div>
  );
}
