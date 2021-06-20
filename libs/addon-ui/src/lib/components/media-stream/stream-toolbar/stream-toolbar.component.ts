import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ekisa-sdk-stream-toolbar',
  templateUrl: './stream-toolbar.component.html',
  styleUrls: ['./stream-toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
