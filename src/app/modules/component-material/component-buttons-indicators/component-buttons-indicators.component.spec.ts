import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentButtonsIndicatorsComponent } from './component-buttons-indicators.component';

describe('ComponentButtonsIndicatorsComponent', () => {
  let component: ComponentButtonsIndicatorsComponent;
  let fixture: ComponentFixture<ComponentButtonsIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentButtonsIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentButtonsIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
