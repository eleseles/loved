export enum ArtStyle {
  CHARCOAL = 'Charcoal Sketch',
  WATERCOLOR = 'Watercolor',
  REALISTIC_OIL = 'Realistic Oil Painting',
  MODERN_LINE = 'Modern Line Art',
  BW_PHOTO = 'Black & White Artistic Photo'
}

export enum AspectRatio {
  SQUARE = '1:1',
  STANDARD = '3:2',
  PORTRAIT = '4:3',
  WIDESCREEN = '16:9'
}

export enum BackgroundOption {
  BLURRED = 'Blurred Original',
  SOLID_GRAY = 'Solid Premium Gray',
  WHITE = 'Minimal White',
  ETHEREAL = 'Ethereal/Cloudy'
}

export interface UploadedFile {
  id: string;
  file: File;
  previewUrl: string;
}

export interface GenerationState {
  isGenerating: boolean;
  resultImage: string | null;
  error: string | null;
}