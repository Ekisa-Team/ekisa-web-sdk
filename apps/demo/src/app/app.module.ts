import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MediaStreamModule } from '@ekisa-sdk/addon-ui';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MediaStreamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
