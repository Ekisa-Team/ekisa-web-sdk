import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demos',
    children: [
      {
        path: 'media-stream',
        loadChildren: () =>
          import('./pages/media-stream-demo/media-stream-demo.module').then(
            (m) => m.MediaStreamDemoModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
