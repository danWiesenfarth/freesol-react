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

  africanAdventures: {
    media: {
      type: 'image',
      src: '/images/africa/camps_bay3.jpg',
    },
  },
};
