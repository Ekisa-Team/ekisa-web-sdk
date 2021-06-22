import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaStreamActionType } from '../../types/media-stream-action.type';
import { MediaStreamControlComponent } from './media-stream-control.component';

describe('MediaStreamControlComponent', () => {
  let component: MediaStreamControlComponent;
  let fixture: ComponentFixture<MediaStreamControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaStreamControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamControlComponent);
    component = fixture.componentInstance;

    const expectedType: MediaStreamActionType = 'audio';
    component.type = expectedType;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
