export interface HeroContent {
  title?: string;
  subtitle?: string;
  description?: string;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  showLogo?: boolean;
}
