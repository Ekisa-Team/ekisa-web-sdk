/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { RenderBitmapResult } from '../../types/options.types.js';
import { LICENCEKEY, SERVICEPORT } from '../../wacom/SigCaptX-Globals';
import { JSONreq, WacomGSS_SignatureSDK } from '../../wacom/wgssSigCaptX.js';

declare global {
  interface Window {
    JSONreq: any;
    sdkPtr: any;
  }
}

window.JSONreq = JSONreq;

@Component({
  selector: 'ews-wacom-signature',
  templateUrl: './wacom-signature.component.html',
  styleUrls: ['./wacom-signature.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class WacomSignatureComponent {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  @Input() width = 400;
  @Input() height = 200;
  @Input() who!: string;
  @Input() reason!: string;
  @Input() printLogs!: boolean;

  @Output() captured = new EventEmitter<RenderBitmapResult>();

  sdk: any = null;
  sigObj: any = null;
  sigCtl: any = null;
  dynCapt: any = null;

  constructor() {
    this.restartSession(() => {});
  }

  restartSession(callback: () => void) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;

    const timeout = setTimeout(timedDetect, 1500);

    this.sdk = new WacomGSS_SignatureSDK(onDetectRunning, SERVICEPORT);

    function timedDetect() {
      if (that.sdk.running) {
        that.print('Signature SDK Service detected.');
        start();
      } else {
        that.print('Signature SDK Service not detected.');
      }
    }

    function onDetectRunning() {
      if (that.sdk.running) {
        that.print('Signature SDK Service detected.');
        clearTimeout(timeout);
        start();
      } else {
        that.print('Signature SDK Service not detected.');
      }
    }

    function start() {
      if (that.sdk.running) {
        that.sigCtl = new that.sdk.SigCtl(onSigCtlConstructor);
      }
    }

    function onSigCtlConstructor(sigCtlV: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        that.sigCtl.PutLicence(LICENCEKEY, onSigCtlPutLicence);
      } else {
        that.print('SigCtl constructor error: ', status);
      }
    }

    function onSigCtlPutLicence(sigCtlV: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        that.dynCapt = new that.sdk.DynamicCapture(onDynCaptConstructor);
      } else {
        that.print('SigCtl PutLicence error: ', status);
      }
    }

    function onDynCaptConstructor(dynCaptV: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        that.sigCtl.GetSignature(onGetSignature);
      } else {
        that.print('DynCapt constructor error: ', status);
      }
    }

    function onGetSignature(sigCtlV: any, sigObjV: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        that.sigObj = sigObjV;
        that.sigCtl.GetProperty('Component_FileVersion', onSigCtlGetProperty);
      } else {
        that.print('SigCapt GetSignature error: ', status);
      }
    }

    function onSigCtlGetProperty(sigCtlV: any, property: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        that.print('DLL: flSigCOM.dll', 'v', property.text);
        that.dynCapt.GetProperty('Component_FileVersion', onDynCaptGetProperty);
      } else {
        that.print('SigCtl GetProperty error: ', status);
      }
    }

    function onDynCaptGetProperty(dynCaptV: any, property: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        that.print('DLL: flSigCapt.dll', 'v', property.text);
        that.print('Application ready.');
        that.print("Press 'Capture' to capture a signature.");

        if (typeof callback === 'function') {
          callback();
        }
      } else {
        that.print('DynCapt GetProperty error: ' + status);
      }
    }
  }

  capture() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;

    if (!this.sdk.running || !this.dynCapt) {
      this.print('Session error. Restarting the session.');
      this.restartSession(this.capture);
      return;
    }

    this.dynCapt.Capture(
      this.sigCtl,
      this.who,
      this.reason,
      null,
      null,
      onDynCaptCapture,
    );

    function onDynCaptCapture(dynCaptV: any, SigObjV: any, status: any) {
      if (that.sdk.ResponseStatus.INVALID_SESSION == status) {
        that.print('Error: invalid session. Restarting the session.');
        that.restartSession(that.capture);
      } else {
        if (that.sdk.DynamicCaptureResult.DynCaptOK !== status) {
          that.print('Capture returned: ' + status);
        }
        switch (status) {
          case that.sdk.DynamicCaptureResult.DynCaptOK:
            that.sigObj = SigObjV;
            that.print('Signature captured successfully');

            // eslint-disable-next-line no-case-declarations
            const flags =
              that.sdk.RBFlags.RenderOutputPicture |
              that.sdk.RBFlags.RenderColor24BPP;

            that.sigObj.RenderBitmap(
              'bmp',
              that.width,
              that.height,
              0.7,
              0x00000000,
              0x00ffffff,
              flags,
              0,
              0,
              onRenderBitmap,
            );
            break;
          case that.sdk.DynamicCaptureResult.DynCaptCancel:
            that.print('Signature capture cancelled');
            break;
          case that.sdk.DynamicCaptureResult.DynCaptPadError:
            that.print('No capture service available');
            break;
          case that.sdk.DynamicCaptureResult.DynCaptError:
            that.print('Tablet Error');
            break;
          case that.sdk.DynamicCaptureResult.DynCaptIntegrityKeyInvalid:
            that.print('The integrity key parameter is invalid (obsolete)');
            break;
          case that.sdk.DynamicCaptureResult.DynCaptNotLicensed:
            that.print('No valid Signature Capture licence found');
            break;
          case that.sdk.DynamicCaptureResult.DynCaptAbort:
            that.print('Error - unable to parse document contents');
            break;
          default:
            that.print('Capture Error ' + status);
            break;
        }
      }
    }

    function onRenderBitmap(sigObjV: any, bmpObj: any, status: any) {
      if (that.sdk.ResponseStatus.OK == status) {
        const ctx = that.canvas.nativeElement.getContext('2d');

        ctx?.drawImage(bmpObj.image, 0, 0, that.width, that.height);

        that.captured.emit({
          image: bmpObj.image,
          base64: that.canvas.nativeElement.toDataURL(),
        });
      } else {
        that.print('Signature Render Bitmap error: ' + status);
      }
    }
  }

  private print(...message: string[]): void {
    if (this.printLogs) {
      console.log(...message);
    }
  }
}
