import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ekisa-sdk-stream-toolbar-item',
  templateUrl: './stream-toolbar-item.component.html',
  styleUrls: ['./stream-toolbar-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamToolbarItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
