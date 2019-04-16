interface UrlsInterface {
 small: string;
 medium: string;
 original: string;
}

export interface ImageDataInterface {
  id: number;
  title: string;
  urls: UrlsInterface;
  isPreviousElement?: boolean;
  isNextElement?: boolean;
}
