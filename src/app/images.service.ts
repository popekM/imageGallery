import { Injectable } from '@angular/core';
import { ImageDataInterface } from './interfaces/images-data.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  public isDetailView = new BehaviorSubject<boolean>(false);
  private detailViewImageIndex: number = null;
  private exampleData: ImageDataInterface[] = [
    {
      id: 0,
      title: 'Macarons',
      urls: {
        small: 'assets/001_small.jpg',
        medium: 'assets/001_medium.jpg',
        original: 'assets/001.jpg'
      }
    },
    {
      id: 1,
      title: 'Sushi',
      urls: {
        small: 'assets/002_small.jpg',
        medium: 'assets/002_medium.jpg',
        original: 'assets/002.jpg'
      }
    },
    {
      id: 2,
      title: 'Muesli',
      urls: {
        small: 'assets/003_small.jpg',
        medium: 'assets/003_medium.jpg',
        original: 'assets/003.jpg'
      }
    },
    {
      id: 3,
      title: 'Pizza',
      urls: {
        small: 'assets/004_small.jpg',
        medium: 'assets/004_medium.jpg',
        original: 'assets/004.jpg'
      }
    },
    {
      id: 4,
      title: 'Bread',
      urls: {
        small: 'assets/005_small.jpg',
        medium: 'assets/005_medium.jpg',
        original: 'assets/005.jpg'
      }
    },
    {
      id: 5,
      title: 'Fruits',
      urls: {
        small: 'assets/006_small.jpg',
        medium: 'assets/006_medium.jpg',
        original: 'assets/006.jpg'
      }
    },
    {
      id: 6,
      title: 'Candy on stick',
      urls: {
        small: 'assets/007_small.jpg',
        medium: 'assets/007_medium.jpg',
        original: 'assets/007.jpg'
      }
    },
    {
      id: 7,
      title: 'Chocolates',
      urls: {
        small: 'assets/008_small.jpg',
        medium: 'assets/008_medium.jpg',
        original: 'assets/008.jpg'
      }
    },
    {
      id: 8,
      title: 'Pancakes',
      urls: {
        small: 'assets/009_small.jpg',
        medium: 'assets/009_medium.jpg',
        original: 'assets/009.jpg'
      }
    },
    {
      id: 9,
      title: 'Apples',
      urls: {
        small: 'assets/010_small.jpg',
        medium: 'assets/010_medium.jpg',
        original: 'assets/010.jpg'
      }
    },
    {
      id: 10,
      title: 'Paprika',
      urls: {
        small: 'assets/011_small.jpg',
        medium: 'assets/011_medium.jpg',
        original: 'assets/011.jpg'
      }
    },
    {
      id: 11,
      title: 'Cupcakes',
      urls: {
        small: 'assets/012_small.jpg',
        medium: 'assets/012_medium.jpg',
        original: 'assets/012.jpg'
      }
    },
    {
      id: 12,
      title: 'Cherries',
      urls: {
        small: 'assets/013_small.jpg',
        medium: 'assets/013_medium.jpg',
        original: 'assets/013.jpg'
      }
    },
    {
      id: 13,
      title: 'Candy',
      urls: {
        small: 'assets/014_small.jpg',
        medium: 'assets/014_medium.jpg',
        original: 'assets/014.jpg'
      }
    },
    {
      id: 14,
      title: 'Wafers',
      urls: {
        small: 'assets/015_small.jpg',
        medium: 'assets/015_medium.jpg',
        original: 'assets/015.jpg'
      }
    },
    {
      id: 15,
      title: 'Cookies',
      urls: {
        small: 'assets/016_small.jpg',
        medium: 'assets/016_medium.jpg',
        original: 'assets/016.jpg'
      }
    },
    {
      id: 16,
      title: 'Breakfast',
      urls: {
        small: 'assets/017_small.jpg',
        medium: 'assets/017_medium.jpg',
        original: 'assets/017.jpg'
      }
    },
    {
      id: 17,
      title: 'Mushrooms',
      urls: {
        small: 'assets/018_small.jpg',
        medium: 'assets/018_medium.jpg',
        original: 'assets/018.jpg'
      }
    },
    {
      id: 18,
      title: 'Frying Pan',
      urls: {
        small: 'assets/019_small.jpg',
        medium: 'assets/019_medium.jpg',
        original: 'assets/019.jpg'
      }
    },
    {
      id: 19,
      title: 'Cake',
      urls: {
        small: 'assets/020_small.jpg',
        medium: 'assets/020_medium.jpg',
        original: 'assets/020.jpg'
      }
    }
  ];

  constructor() { }

  public showImageModal(imageId: number): void {
    let index = this.exampleData.findIndex(element => element.id === imageId);
    if (index !== (-1)) {
      this.detailViewImageIndex = index;
      this.isDetailView.next(true);
    }
  }

  public closeImageModal(): void {
    this.isDetailView.next(false);
  }

  public getImagesData(): Promise<ImageDataInterface[]> {
    return Promise.resolve(
      this.exampleData
    );
  }

  public getSingleImageData(): ImageDataInterface {
    if (this.detailViewImageIndex !== null) {
      const isPreviousElement = (this.detailViewImageIndex - 1) >= 0;
      const isNextElement = (this.exampleData.length - 1) !== this.detailViewImageIndex;

      return Object.assign(this.exampleData[this.detailViewImageIndex], { isPreviousElement, isNextElement });
    }
    return null;
  }

  public nextImage(): ImageDataInterface {
    if (this.detailViewImageIndex !== null) {
      this.detailViewImageIndex++;
    }
    return this.getSingleImageData();
  }

  public previousImage(): ImageDataInterface {
    if (this.detailViewImageIndex !== null) {
      this.detailViewImageIndex--;
    }
  return this.getSingleImageData();
  }

  public removeImage(): ImageDataInterface {
    if (this.detailViewImageIndex !== null) {
      this.exampleData.splice(this.detailViewImageIndex, 1);
      this.detailViewImageIndex = null;
      return this.getSingleImageData();
    }
  }

  public saveNewTitle(title: string): void {
    if (this.detailViewImageIndex !== null && title) {
      this.exampleData[this.detailViewImageIndex].title = title;
    }
  }

}
