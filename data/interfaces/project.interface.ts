export interface Soundtrack {
  trackId: string;
  title: string;
  artist: string;
}

export interface ProjectMetadata {
  soundtrack?: Soundtrack;
}
