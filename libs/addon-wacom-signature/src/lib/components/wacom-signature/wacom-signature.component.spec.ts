import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WacomSignatureComponent } from './wacom-signature.component';

describe('WacomSignatureComponent', () => {
  let component: WacomSignatureComponent;
  let fixture: ComponentFixture<WacomSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WacomSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WacomSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
