import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapMaterialComponent } from './drap-material.component';

describe('DrapMaterialComponent', () => {
  let component: DrapMaterialComponent;
  let fixture: ComponentFixture<DrapMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrapMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrapMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
