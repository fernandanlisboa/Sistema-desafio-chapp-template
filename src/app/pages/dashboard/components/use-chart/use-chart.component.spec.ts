import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseChartComponent } from './use-chart.component';

describe('UseChartComponent', () => {
  let component: UseChartComponent;
  let fixture: ComponentFixture<UseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
