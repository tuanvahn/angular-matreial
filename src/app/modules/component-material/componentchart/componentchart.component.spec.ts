import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentchartComponent } from './componentchart.component';

describe('ComponentchartComponent', () => {
  let component: ComponentchartComponent;
  let fixture: ComponentFixture<ComponentchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
