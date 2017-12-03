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

  // constructor is used in tests so info might be partial
  constructor(id: string, info: Partial<IVolumeInfo>) {
    this.id = id;
    this.volumeInfo = info as any;
  }
}
