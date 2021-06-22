import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaStreamToolbarComponent } from './media-stream-toolbar.component';

describe('MediaStreamToolbarComponent', () => {
  let component: MediaStreamToolbarComponent;
  let fixture: ComponentFixture<MediaStreamToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaStreamToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
