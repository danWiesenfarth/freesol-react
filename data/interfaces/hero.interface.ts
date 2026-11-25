import { ImageSettings } from './media.interface';

export interface HeroContent {
  title?: string;
  subtitle?: string;
  description?: string;
  showLogo?: boolean;
  height?: string;

  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    poster?: string;
    imageSettings?: ImageSettings;
  };
}

export interface HeroProps {
  heroContent: HeroContent;
}
