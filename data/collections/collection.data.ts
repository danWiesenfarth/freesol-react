import type { PhotoProjectPreview } from '../interfaces/photo.interface';

export const collectionsData: PhotoProjectPreview[] = [
  {
    title: 'Frozen Landscapes',
    description: 'The coldest and most remote places on earth',
    thumbnail: '/images/arctic/ice_drone2.jpg',
    alt: 'greenlandic glacier from above',
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
    title: 'Savannah Wildlife',
    description: 'See the big five from the comfort of your home',
    thumbnail: '/images/africa/male_lion_1.jpg',
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
  {
    title: 'Eye In the Sky',
    description: 'Everything looks better from above',
    thumbnail: '/images/africa/dune45_reveal.jpg',
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
];
