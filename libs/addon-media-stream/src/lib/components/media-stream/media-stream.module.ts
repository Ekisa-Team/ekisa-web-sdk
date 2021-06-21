import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaStreamControlModule } from '../media-stream-control/media-stream-control.module';
import { MediaStreamComponent } from './media-stream.component';

@NgModule({
  declarations: [MediaStreamComponent],
  imports: [CommonModule, MediaStreamControlModule],
  exports: [MediaStreamComponent],
})
export class MediaStreamModule {}
