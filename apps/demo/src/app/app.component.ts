import { Component } from '@angular/core';

@Component({
  selector: 'ekisa-sdk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';

  onInitialized(e: any): void {
    console.log(e);
  }
  onTrackChanged(e: any): void {
    console.log(e);
  }
  onCatchError(e: any): void {
    console.log(e);
  }
}
