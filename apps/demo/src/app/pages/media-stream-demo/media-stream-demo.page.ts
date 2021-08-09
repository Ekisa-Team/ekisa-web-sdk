import { Component, OnInit } from '@angular/core';
import { MediaStreamOptions } from '@ekisa-web-sdk/addon-media-stream';

@Component({
  templateUrl: './media-stream-demo.page.html',
  styleUrls: ['./media-stream-demo.page.css'],
})
export class MediaStreamDemoPage implements OnInit {
  image = '';

  mediaStreamOptions!: MediaStreamOptions;

  constructor() {
    this.mediaStreamOptions = {
      enterWithAudio: false,
      enterWithVideo: true,
      video: {
        width: 1280,
        height: 768,
        framesColor: '#ffc0cb',
        objectFit: 'contain',
      },
      controls: {
        showAudio: true,
        audioHint: 'Enable / disable audio',
        showVideo: true,
        videoHint: 'Enable / disable video',
        showSnapshot: true,
        snapshotText: 'Take a picture',
      },
      snapshot: {
        audioSrc: '../assets/sounds/camera-shutter.mp3',
        animate: false,
      },
    };
  }

  ngOnInit(): void {}

  onEnumerateDevices(devices: MediaDeviceInfo[]): void {
    console.log('enumerateDevices -->', devices);
  }

  onTrackChanged(track: MediaStreamTrack): void {
    console.log('trackChanged -->', track);
  }

  onSnapshotTaken(image: string): void {
    this.image = image;
  }

  onCatchError(errorMessage: string): void {
    console.log('catchError -->', errorMessage);
  }
}
