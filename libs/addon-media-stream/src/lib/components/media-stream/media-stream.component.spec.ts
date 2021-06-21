import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaStreamControlModule } from '../media-stream-control/media-stream-control.module';
import { MediaStreamComponent } from './media-stream.component';
describe('MediaStreamComponent', () => {
  let component: MediaStreamComponent;
  let fixture: ComponentFixture<MediaStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaStreamComponent],
      imports: [MediaStreamControlModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
