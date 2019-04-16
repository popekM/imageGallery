import { Component, Input } from '@angular/core';
import { ImageDataInterface } from '../interfaces/images-data.interface';

@Component({
  selector: 'grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent {

  @Input() imageItem: ImageDataInterface;
  public mouseOver: boolean = false;

  constructor() { }

  public mouseEnter(): void {
    this.mouseOver = true;
  }

  public mouseLeave(): void {
    this.mouseOver = false;
  }

}
