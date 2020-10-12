import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEditionComponent } from './icon-edition.component';

describe('IconEditionComponent', () => {
  let component: IconEditionComponent;
  let fixture: ComponentFixture<IconEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
