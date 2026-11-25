import type { PhotoProps } from '@/data/interfaces/photo.interface';
import type { ProjectMetadata } from '../interfaces/project.interface';

export const savannahWildlifeMetadata = {
  soundtrack: {
    trackId: '4fRgzxAJcqhjYv5DQJSdRH',
    title: 'Places',
    artist: 'Elderbrook',
  },
} satisfies ProjectMetadata;

export const savannahWildlife: PhotoProps[] = [
  {
    src: '/images/africa/krueger-buffalo.jpg',
    alt: 'Port Lockroy, Antarctica',
    title: 'Port Lockroy',
    location: 'Antarctica',
    spanCol: 4,
    spanRow: 4,
    imageSettings: {
      focalPoint: {
        desktop: '50% 40%',
        tablet: '50% 40%',
        mobile: '10% 50%',
      },
    },
  },
  {
    src: '/images/africa/tk_kruger6.jpg',
    alt: 'Port Lockroy, Antarctica',
    title: 'Port Lockroy',
    location: 'Antarctica',
    spanCol: 8,
    spanRow: 4,
    imageSettings: {
      focalPoint: {
        desktop: '50% 40%',
        tablet: '50% 40%',
        mobile: '50% 50%',
      },
    },
  },
  {
    src: '/images/africa/cheetah.jpg',
    alt: 'Port Lockroy, Antarctica',
    title: 'Port Lockroy',
    location: 'Antarctica',
    spanCol: 8,
    spanRow: 4,
    imageSettings: {
      focalPoint: {
        desktop: '20% 40%',
        tablet: '20% 40%',
        mobile: '20% 50%',
      },
    },
  },
  {
    src: '/images/africa/giraffe_1.jpg',
    alt: 'Port Lockroy, Antarctica',
    title: 'Port Lockroy',
    location: 'Antarctica',
    spanCol: 4,
    spanRow: 4,
    imageSettings: {
      focalPoint: {
        desktop: '20% 40%',
        tablet: '20% 40%',
        mobile: '20% 50%',
      },
    },
  },
];
