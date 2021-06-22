import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaStreamLoaderComponent } from './media-stream-loader.component';

describe('MediaStreamLoaderComponent', () => {
  let component: MediaStreamLoaderComponent;
  let fixture: ComponentFixture<MediaStreamLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaStreamLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
