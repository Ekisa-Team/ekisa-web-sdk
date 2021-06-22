import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaStreamDemoPage } from './media-stream-demo.page';

describe('MediaStreamDemoPage', () => {
  let component: MediaStreamDemoPage;
  let fixture: ComponentFixture<MediaStreamDemoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaStreamDemoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
