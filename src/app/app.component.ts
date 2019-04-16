import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagesService } from './images.service';
import { ImageDataInterface } from './interfaces/images-data.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private imagesService: ImagesService) { }

  public imagesData: ImageDataInterface[] = [];
  public isDetailView: boolean = false;
  private isDetailViewSubscription: Subscription;

  ngOnInit() {
    this.imagesService.getImagesData().then(data => {
      this.imagesData = data;
    });
    this.isDetailViewSubscription = this.imagesService.isDetailView.subscribe(response =>{
      this.isDetailView = response;
    });
  }

  ngOnDestroy() {
    if (this.isDetailViewSubscription) {
      this.isDetailViewSubscription.unsubscribe();
    }
  }

  public showImageModal(imageId: number): void {
    this.imagesService.showImageModal(imageId);
  }

  public trackById(index, item): number {
    return item.id;
  }

}
