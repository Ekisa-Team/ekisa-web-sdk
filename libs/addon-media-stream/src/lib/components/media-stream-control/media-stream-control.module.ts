import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaStreamControlComponent } from './media-stream-control.component';

@NgModule({
  declarations: [MediaStreamControlComponent],
  imports: [CommonModule],
  exports: [MediaStreamControlComponent],
})
export class MediaStreamControlModule {}
