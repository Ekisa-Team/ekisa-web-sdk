import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ews-media-stream-loader',
  templateUrl: './media-stream-loader.component.html',
  styleUrls: ['./media-stream-loader.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaStreamLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
