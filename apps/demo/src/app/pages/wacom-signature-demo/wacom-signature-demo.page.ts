import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  RenderBitmapResult,
  WacomSignatureComponent
} from '@ekisa-web-sdk/addon-wacom-signature';

@Component({
  templateUrl: './wacom-signature-demo.page.html',
  styleUrls: ['./wacom-signature-demo.page.css'],
})
export class WacomSignatureDemoPage implements OnInit {
  @ViewChild(WacomSignatureComponent) wacomSignature!: WacomSignatureComponent;
  @ViewChild('signatureBox') signatureBox!: ElementRef<HTMLDivElement>;

  signature = '';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onClickCapture(): void {
    try {
      this.wacomSignature.capture();
    } catch (error) {
      console.log(error);
      alert('Error ' + error)
    }
  }

  onCaptured({ image, base64 }: RenderBitmapResult): void {
    this.signatureBox.nativeElement.innerHTML = '';
    this.signatureBox.nativeElement.appendChild(image);

    this.signature = base64;

    this.cdr.detectChanges();
  }

  onCapturedError({type, message}: {type: string, message: string}): void {
    console.log(type, message);
    if (type === 'DynCaptStatus' && message === '103') {
      alert('Tablet is disconnected');
    }
  }
}
