import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaStreamControlComponent } from './components/media-stream-control/media-stream-control.component';
import { MediaStreamToolbarComponent } from './components/media-stream-toolbar/media-stream-toolbar.component';
import { MediaStreamComponent } from './components/media-stream/media-stream.component';

@NgModule({
  declarations: [
    MediaStreamComponent,
    MediaStreamToolbarComponent,
    MediaStreamControlComponent,
  ],
  imports: [CommonModule],
  exports: [MediaStreamComponent],
})
export class MediaStreamModule {}
