export interface PhotoProps {
  src: string;
  alt: string;
  title: string;
  location: string;
  spanCol: number;
  spanRow: number;
}

export interface PhotoProjectPreview {
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  meta?: string;
}
