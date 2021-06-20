import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ekisa-sdk-media-stream',
  templateUrl: './media-stream.component.html',
  styleUrls: ['./media-stream.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaStreamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
