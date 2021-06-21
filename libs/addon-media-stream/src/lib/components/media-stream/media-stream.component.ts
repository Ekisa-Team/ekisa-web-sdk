import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MediaStreamAction } from '../../enums/media-stream-action.enum';
import { MediaStreamOptions } from '../../interfaces/media-stream-options.interface';
import { MediaStreamActionType } from '../../types/media-stream-action.type';

@Component({
  selector: 'ekisa-sdk-media-stream',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaStreamComponent implements OnInit, AfterViewInit {
  @ViewChild('video') videoRef!: ElementRef;
  @ViewChild('canvas') canvasRef!: ElementRef;

  @Input() options!: MediaStreamOptions;

  @Output() initialized = new EventEmitter<{ tracks: MediaStreamTrack[] }>();
  @Output() trackChanged = new EventEmitter<MediaStreamTrack>();
  @Output() snapshotTaken = new EventEmitter<string>();
  @Output() catchError = new EventEmitter<string>();

  mediaStreamAction = MediaStreamAction;

  streamInitialized = false;

  readonly iconMap: Record<keyof typeof MediaStreamAction, string> = {
    AudioOpened: 'volume_up',
    AudioClosed: 'volume_off',
    VideoOpened: 'videocam',
    VideoClosed: 'videocam_off',
    TakeSnapshot: 'photo_camera',
  };

  hasCams = false;
  hasMics = false;

  audioIsOpened = false;
  videoIsOpened = false;

  snapshotAnimation = '';

  constructor(private cdr: ChangeDetectorRef) {}

  get tracks(): MediaStreamTrack[] {
    return this.videoRef.nativeElement.srcObject.getTracks();
  }

  get audioIcon(): string {
    return this.audioIsOpened
      ? this.iconMap.AudioOpened
      : this.iconMap.AudioClosed;
  }

  get videoIcon(): string {
    return this.videoIsOpened
      ? this.iconMap.VideoOpened
      : this.iconMap.VideoClosed;
  }

  get boxStyles(): string {
    const width = `${this.options?.video?.width}px`;
    const height = `${this.options?.video?.height}px`;

    return `
      max-width: ${width};
      max-height: ${height};
    `;
  }

  get videoStyles(): string {
    const { width, height, objectFit, framesColor } = this.options?.video || {};

    return `
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '100vh'};
      object-fit: ${objectFit || 'contain'};
      background-color: ${framesColor || '#333'}
    `;
  }

  get canvasStyles(): string {
    const { width, height } = this.options?.video || {};

    return `
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '100vh'};
    `;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupDevices();
  }

  onToggleAction(actionType: MediaStreamActionType): void {
    switch (true) {
      case actionType === 'audio':
        this.audioIsOpened = this.toggleOrSet(actionType);
        break;

      case actionType === 'video':
        this.videoIsOpened = this.toggleOrSet(actionType);
        break;

      case actionType === 'snapshot':
        this.takeSnapshot();
        break;
    }
  }

  private setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          const cams = devices.filter((device) => device.kind === 'videoinput');
          const mics = devices.filter((device) => device.kind === 'audioinput');

          this.hasCams = cams.length > 0;
          this.hasMics = mics.length > 0;

          return navigator.mediaDevices.getUserMedia({
            audio: this.hasMics,
            video: this.hasCams,
          });
        })
        .then((stream) => {
          this.videoRef.nativeElement.srcObject = stream;

          this.toggleOrSet('audio', this.options.enterWithAudio);
          this.toggleOrSet('video', this.options.enterWithVideo);
          this.audioIsOpened = !!this.options.enterWithAudio;
          this.videoIsOpened = !!this.options.enterWithVideo;

          this.streamInitialized = true;
          this.initialized.emit({ tracks: this.tracks });
        })
        .catch((error) => {
          this.catchError.emit(error);
        });
    }
  }

  private toggleOrSet(kind: MediaStreamActionType, value?: boolean): boolean {
    const track = this.tracks.find((t) => t.kind === kind);
    let isEnabled = false;

    if (track) {
      track.enabled = value || !track.enabled;
      isEnabled = track.enabled;
    }

    this.trackChanged.emit(track);
    return isEnabled;
  }

  private takeSnapshot(): void {
    this.animateSnapshot();
    this.playSnapshotSound();

    const image = this.videoRef.nativeElement;
    const ctx = this.canvasRef.nativeElement.getContext('2d');

    ctx.canvas.width = 1280;
    ctx.canvas.height = 768;

    ctx.drawImage(image, 0, 0, 1280, 768);

    const base64 = this.canvasRef.nativeElement.toDataURL('image/png');

    this.snapshotTaken.emit(base64);
  }

  private animateSnapshot(): void {
    this.snapshotAnimation = 'animate-snapshot';

    setTimeout(() => {
      this.snapshotAnimation = '';
      this.cdr.markForCheck();
    }, 700);
  }

  private playSnapshotSound(): void {
    const audio = new Audio();
    audio.src = '../../../../../../assets/sounds/camera.mp3';
    audio.load();
    audio.play();
  }
}
