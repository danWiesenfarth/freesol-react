import type { PhotoProjectPreview } from '../interfaces/photo.interface';

export const collectionsData: PhotoProjectPreview[] = [
  {
    title: 'Frozen Landscapes',
    description: 'Deserts to lush forests',
    thumbnail: '/images/arctic/arctic1.jpg',
    alt: 'a male lion',
    src: '/collections/frozen-landscapes/',
    imageSettings: {
      focalPoint: {
        desktop: '80% 40%',
        tablet: '50% 10%',
        mobile: '60% 35%',
      },
    },
  },
  {
    title: 'Eye In the Sky',
    description: 'Deserts to lush forests',
    thumbnail: '/images/europe/tk_henningsvaer1.jpg',
    alt: 'a male lion',
    src: '/collections/eye-in-the-sky/',
    imageSettings: {
      focalPoint: {
        desktop: '80% 40%',
        tablet: '50% 10%',
        mobile: '60% 35%',
      },
    },
  },
  {
    title: 'Savannah Wildlife',
    description: 'Deserts to lush forests',
    thumbnail: '/images/africa/cheetah.jpg',
    alt: 'a male lion',
    src: '/collections/savannah-wildlife/',
    imageSettings: {
      focalPoint: {
        desktop: '20% 40%',
        tablet: '20% 10%',
        mobile: '20% 35%',
      },
    },
  },
];
