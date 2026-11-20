export interface PhotoProps {
  src: string;
  alt: string;
  title: string;
  location: string;
  spanCol: number;
  spanRow: number;

  focalPoint?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}

export interface PhotoProjectPreview {
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  meta?: string;
}

export interface ProjectsHeaderPreview {
  title: string;
  thumbnail: string;
  description?: string;
  link: string;
}
