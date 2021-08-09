import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WacomSignatureComponent } from './components/wacom-signature/wacom-signature.component';

@NgModule({
  declarations: [WacomSignatureComponent],
  imports: [CommonModule],
  exports: [WacomSignatureComponent],
})
export class WacomSignatureModule {}
