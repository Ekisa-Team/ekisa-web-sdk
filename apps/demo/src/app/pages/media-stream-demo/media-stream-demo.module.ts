import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaStreamModule } from '@ekisa-sdk/addon-media-stream';
import { MediaStreamDemoPage } from './media-stream-demo.page';

const routes: Routes = [{ path: '', component: MediaStreamDemoPage }];

@NgModule({
  declarations: [MediaStreamDemoPage],
  imports: [CommonModule, RouterModule.forChild(routes), MediaStreamModule],
})
export class MediaStreamDemoModule {}
