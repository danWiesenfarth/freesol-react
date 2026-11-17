export interface HeroContent {
  title?: string;
  subtitle?: string;
  description?: string;
  showLogo?: boolean;
  media: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
}

export interface HeroProps {
  heroContent: HeroContent;
}
