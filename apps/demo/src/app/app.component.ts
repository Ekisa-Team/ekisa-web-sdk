import { Component } from '@angular/core';

@Component({
  selector: 'ekisa-sdk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';
  image = '';

  onInitialized(e: any): void {
    console.log(e);
  }
  onTrackChanged(e: any): void {
    console.log(e);
  }
  onSnapshotTaken(image: string): void {
    this.image = image;
  }
  onCatchError(e: any): void {
    console.log(e);
  }
}
