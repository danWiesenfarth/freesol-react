import type { BaseMedia } from './media.interface';

export interface PhotoProps extends BaseMedia {
  src: string;
  location: string;
  spanCol: number;
  spanRow: number;
}

export interface PhotoProjectPreview extends BaseMedia {
  src: string;
  thumbnail: string;
  description?: string;
}
