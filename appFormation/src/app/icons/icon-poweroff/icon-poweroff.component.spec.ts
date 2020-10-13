import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPoweroffComponent } from './icon-poweroff.component';

describe('IconPoweroffComponent', () => {
  let component: IconPoweroffComponent;
  let fixture: ComponentFixture<IconPoweroffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPoweroffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPoweroffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
