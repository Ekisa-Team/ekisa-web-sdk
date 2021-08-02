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
  selector: 'ews-media-stream-toolbar',
  templateUrl: './media-stream-toolbar.component.html',
  styleUrls: ['./media-stream-toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaStreamToolbarComponent implements OnInit {
  @Input() showOutside!: boolean | undefined;

  @Output() toggle = new EventEmitter<MediaStreamActionType>();

  constructor() {}

  get toolbarClasses() {
    const toolbarPosition = this.showOutside ? 'outside' : 'inside';

    return `${toolbarPosition}`;
  }

  ngOnInit(): void {}
}
