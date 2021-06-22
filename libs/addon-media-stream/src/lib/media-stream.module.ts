import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaStreamControlComponent } from './components/media-stream-control/media-stream-control.component';
import { MediaStreamToolbarComponent } from './components/media-stream-toolbar/media-stream-toolbar.component';
import { MediaStreamComponent } from './components/media-stream/media-stream.component';
import { MediaStreamLoaderComponent } from './components/media-stream-loader/media-stream-loader.component';

@NgModule({
  declarations: [
    MediaStreamComponent,
    MediaStreamToolbarComponent,
    MediaStreamControlComponent,
    MediaStreamLoaderComponent,
  ],
  imports: [CommonModule],
  exports: [MediaStreamComponent],
})
export class MediaStreamModule {}
