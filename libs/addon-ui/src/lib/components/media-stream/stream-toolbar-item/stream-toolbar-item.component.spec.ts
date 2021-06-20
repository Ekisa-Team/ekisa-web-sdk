import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamToolbarItemComponent } from './stream-toolbar-item.component';

describe('StreamToolbarItemComponent', () => {
  let component: StreamToolbarItemComponent;
  let fixture: ComponentFixture<StreamToolbarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamToolbarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamToolbarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
