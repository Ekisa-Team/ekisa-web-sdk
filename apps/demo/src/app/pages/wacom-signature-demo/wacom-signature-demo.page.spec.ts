import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WacomSignatureDemoPage } from './wacom-signature-demo.page';

describe('WacomSignatureDemoPage', () => {
  let component: WacomSignatureDemoPage;
  let fixture: ComponentFixture<WacomSignatureDemoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WacomSignatureDemoPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WacomSignatureDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
