import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MediaStreamActionType } from '../../types/media-stream-action.type';

@Component({
  selector: 'ekisa-sdk-media-stream-control',
  templateUrl: './media-stream-control.component.html',
  styleUrls: ['./media-stream-control.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaStreamControlComponent implements OnInit {
  @Input()
  type!: MediaStreamActionType;

  @Input()
  icon!: string | undefined;

  @Input()
  text!: string | undefined;

  @Input()
  hint!: string | undefined;

  @Input()
  disabled!: boolean;

  @Output() toggle = new EventEmitter<MediaStreamActionType>();

  constructor() {}

  ngOnInit(): void {
    if (!this.type) {
      throw new TypeError("Attribute 'type' is required");
    }
  }

  onClick(): void {
    this.toggle.emit(this.type);
  }
}
