export interface ImageSettings {
  focalPoint?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}

export interface BaseMedia {
  title: string;
  alt: string;
  imageSettings?: ImageSettings;
}
