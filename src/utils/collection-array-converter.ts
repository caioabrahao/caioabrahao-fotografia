export interface GalleryData {
  name: string;
  slug: string;
  gallery: {
    [key: string]: {
      title: string;
      src: string;
      orientation: string;
    };
  };
}

// takes a gallery json and converts into an array of only links for the images, with no extra metadata
export function getImageUrls(data: GalleryData): string[] {
  return Object.values(data.gallery).map(image => image.src);
}
