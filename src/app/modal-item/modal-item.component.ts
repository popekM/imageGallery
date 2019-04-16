import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagesService } from '../images.service';
import { ImageDataInterface } from '../interfaces/images-data.interface';
import { Subscription, fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})
export class ModalItemComponent implements OnInit, OnDestroy {

  constructor(private imagesService: ImagesService) { }

  public imageData: ImageDataInterface;
  public fullSizeImageMode: boolean = false;
  public editTitleMode: boolean = false;
  public newTitle: string = '';
  private keysActionSubscription: Subscription;

  ngOnInit() {
    this.imageData = this.imagesService.getSingleImageData();
    this.keysActionSubscription = fromEvent(document, 'keydown')
      .pipe(
        filter(() => this.imageData !== null),
        filter(() => !this.editTitleMode)
      )
      .subscribe((e: any) => {
        e.preventDefault();
        if (e.keyCode === 27) {
          this.closeModal();
        } else if (e.keyCode === 39 && this.imageData.isNextElement) {
          this.nextImage();
        } else if (e.keyCode === 37 && this.imageData.isPreviousElement) {
          this.previousImage();
        }
      });
  }

  ngOnDestroy() {
    if (this.keysActionSubscription ) {
      this.keysActionSubscription.unsubscribe();
    }
  }

  public closeModal(): void {
    this.imagesService.closeImageModal();
  }

  public nextImage(): void {
    this.imageData = this.imagesService.nextImage();
  }

  public previousImage(): void {
    this.imageData = this.imagesService.previousImage();
  }

  public removeImage(): void {
    this.imageData = this.imagesService.removeImage();
  }

  public toggleFullSizeImage(): void {
    this.fullSizeImageMode = !this.fullSizeImageMode;
  }

  public enableTitleMode(): void {
    this.newTitle = this.imageData.title;
    this.editTitleMode = true;
  }

  public disableTitleMode(): void {
    this.editTitleMode = false;
  }

  public saveNewTitle(): void {
    this.imagesService.saveNewTitle(this.newTitle);
    this.disableTitleMode();
  }

}
