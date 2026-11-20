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
  };
}

export interface HeroProps {
  heroContent: HeroContent;
}
