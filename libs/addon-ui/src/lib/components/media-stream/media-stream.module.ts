import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaStreamComponent } from './media-stream.component';
import { StreamToolbarItemComponent } from './stream-toolbar-item/stream-toolbar-item.component';
import { StreamToolbarComponent } from './stream-toolbar/stream-toolbar.component';

@NgModule({
  declarations: [
    MediaStreamComponent,
    StreamToolbarComponent,
    StreamToolbarItemComponent,
  ],
  imports: [CommonModule],
  exports: [MediaStreamComponent],
})
export class MediaStreamModule {}
