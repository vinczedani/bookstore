interface IVolumeInfo {
  authors: string[];
  averageRating: number;
  categories: string[];
  description: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  pageCount: number;
  previewLink: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  subtitle: string;
  title: string;
}

export class Book {
  id: string;
  volumeInfo: IVolumeInfo;
}
