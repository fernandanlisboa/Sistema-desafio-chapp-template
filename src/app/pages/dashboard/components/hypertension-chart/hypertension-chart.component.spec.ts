import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HypertensionChartComponent } from './hypertension-chart.component';

describe('HypertensionChartComponent', () => {
  let component: HypertensionChartComponent;
  let fixture: ComponentFixture<HypertensionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HypertensionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HypertensionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
