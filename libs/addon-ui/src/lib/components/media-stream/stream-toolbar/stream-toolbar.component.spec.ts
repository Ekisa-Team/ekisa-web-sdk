import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamToolbarComponent } from './stream-toolbar.component';

describe('StreamToolbarComponent', () => {
  let component: StreamToolbarComponent;
  let fixture: ComponentFixture<StreamToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
