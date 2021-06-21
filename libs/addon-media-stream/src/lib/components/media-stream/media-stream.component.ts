import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
  selector: 'ekisa-sdk-media-stream[audio][video]',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaStreamComponent implements OnInit, AfterViewInit {
  @ViewChild('video') videoRef!: ElementRef;
  @ViewChild('canvas') canvasRef!: ElementRef;

  @Input() audio?: boolean;
  @Input() video?: boolean | MediaTrackConstraintSet;
  @Input() options!: MediaStreamOptions;

  @Output() initialized = new EventEmitter<{ tracks: MediaStreamTrack[] }>();
  @Output() trackChanged = new EventEmitter<MediaStreamTrack>();
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

  audioIsOpened = false;
  videoIsOpened = false;

  constructor() {}

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

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupDevices();
  }

  onToggleAction(actionType: MediaStreamActionType): void {
    if (actionType === 'audio') {
      this.audioIsOpened = this.toggleOrSet(actionType);
    } else if (actionType === 'video') {
      this.videoIsOpened = this.toggleOrSet(actionType);
    }
  }

  private setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const constraints = {
        audio: this.audio,
        video: this.video,
      };

      navigator.mediaDevices
        .getUserMedia(constraints)
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
}
