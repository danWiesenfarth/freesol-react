import MediaImage from './MediaImage';
import type { PhotoProps } from '../../data/interfaces/photo.interface';

interface PhotoComponentProps extends PhotoProps {
  sizes?: string;
}

export default function Photo({
  src,
  alt,
  title,
  location,
  imageSettings,
  sizes,
}: PhotoComponentProps) {
  return (
    <div className='group relative h-full w-full overflow-hidden hover:cursor-zoom-in'>
      <MediaImage
        src={src}
        alt={alt}
        settings={imageSettings}
        sizes={sizes}
        className='transition-transform duration-700 group-hover:scale-105'
      />

      <div className='absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        <div className='translate-y-2 transition-transform duration-300 group-hover:translate-y-0'>
          <h3 className='text-2xl font-medium text-zinc-100'>{title}</h3>
          <p className='mt-1 font-sans-alt text-xs uppercase tracking-wider text-white/70'>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
