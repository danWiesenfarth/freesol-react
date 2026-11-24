import { HeroContent } from './interfaces/hero.interface';

export const navigationStructure = [
  {
    title: 'Collections',
    subpages: [
      {
        title: 'Frozen Landscapes',
        thumbnail: '/images/antarctica/dw_snow_1.jpg',
        description: 'Lorem Ipsum',
        link: '/collections/frozen-landscapes',
      },
      {
        title: 'African Adventures',
        thumbnail: '/images/africa/male_lion_1.jpg',
        description: 'Lorem Ipsum',
        link: '/collections/african-adventures',
      },
      {
        title: 'Eye in the Sky',
        thumbnail: '/images/africa/male_lion_1.jpg',
        description: 'Lorem Ipsum',
        link: '/collections/eye-in-the-sky',
      },
    ],
  },
  {
    title: 'Gallery',
    link: '/exhibition',
  },
  {
    title: 'Shop',
    link: '/shop',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
export const heroContent = {
  home: {
    title: 'Freesol Creatives',
    subtitle: 'Photography & Visual Stories',
    description: 'A collection of moments, perspectives and places.',
    media: {
      type: 'video',
      src: '/video/hero-video.mp4',
    },
    showLogo: true,
  },

  america: {
    title: 'America',
    subtitle: 'America',
    description: 'America',
    media: {
      type: 'image',
      src: '/images/america/mexico_road.jpg',
      alt: 'Snow-covered Antarctic landscape',
    },
  },
  antarctica: {
    title: 'Antarctica',
    subtitle: 'Antarctica',
    description: 'Antarctica',
    media: {
      type: 'image',
      src: '/images/antarctica/Port_Lockroy.jpg',
      alt: 'Snow-covered Antarctic landscape',
      imageSettings: {
        focalPoint: {
          desktop: '50% 50%',
          tablet: '50% 50%',
          mobile: '10% 50%',
        },
      },
    },
  },
  arctic: {
    title: 'Arctic',
    subtitle: 'Arctic',
    description: 'Arctic',
    media: {
      type: 'image',
      src: '/images/arctic/aurora_wallpaper.jpg',
      alt: 'Snow-covered Antarctic landscape',
      imageSettings: {
        focalPoint: {
          desktop: '50% 50%',
          tablet: '60% 50%',
        },
      },
    },
  },

  asia: {
    title: 'Asia',
    subtitle: 'Asia',
    description: 'Asia',
    media: {
      type: 'image',
      src: '/images/asia/biglagoon4.jpg',
      alt: 'Snow-covered Antarctic landscape',
    },
  },

  europe: {
    title: 'Europe',
    subtitle: 'Europe',
    description: 'Europe',
    media: {
      type: 'image',
      src: '/images/europe/graubuenden_road.jpg',
      alt: 'Winding roads in Graubünden, Switzerland',
    },
  },

  oceania: {
    title: 'Oceania',
    subtitle: 'Oceania',
    description: 'Oceania',
    media: {
      type: 'image',
      src: '/images/oceania/tipanier_Sailboat.jpg',
      alt: 'Winding roads in Graubünden, Switzerland',
    },
  },

  frozenLandscapes: {
    title: 'Frozen Landscapes',
    subtitle: 'Antarctica',
    description: 'A journey through the remote and frozen wilderness.',
    media: {
      type: 'image',
      src: '/images/antarctica/dw_snow_1.jpg',
      alt: 'Snow-covered Antarctic landscape',
    },
  },
  eyeInTheSky: {
    title: 'Eye in the Sky',
    subtitle: 'High Altitude, high reward',
    description: 'Drone Shots from around the world',
    media: {
      type: 'image',
      src: '/images/africa/camps_bay3.jpg',
      alt: 'Camps Bay beach in Cape Town, South Africa',
    },
  },
  savannahWildlife: {
    title: 'Savannah Wildlife',
    subtitle: 'High Altitude, high reward',
    description: 'Drone Shots from around the world',
    media: {
      type: 'image',
      src: '/images/africa/camps_bay3.jpg',
      alt: 'Camps Bay beach in Cape Town, South Africa',
    },
  },

  africa: {
    title: 'Africa',
    subtitle: '',
    description: 'From the deserts of Nambia to the beaches of the Seychelles',
    media: {
      type: 'video',
      src: '/video/africa-hero.mp4',
    },
  },
} as const satisfies Record<string, HeroContent>;
