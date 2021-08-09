import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WacomSignatureModule } from '@ekisa-web-sdk/addon-wacom-signature';
import { WacomSignatureDemoPage } from './wacom-signature-demo.page';

const routes: Routes = [{ path: '', component: WacomSignatureDemoPage }];

@NgModule({
  declarations: [WacomSignatureDemoPage],
  imports: [CommonModule, RouterModule.forChild(routes), WacomSignatureModule],
})
export class WacomSignatureDemoModule {}
