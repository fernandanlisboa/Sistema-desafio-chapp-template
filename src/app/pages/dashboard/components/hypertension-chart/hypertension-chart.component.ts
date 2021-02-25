import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexGrid, ApexTitleSubtitle } from 'ng-apexcharts';

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly'
}

@Component({
  selector: 'app-hypertension-chart',
  templateUrl: './hypertension-chart.component.html',
  styleUrls: ['./hypertension-chart.component.scss']
})
export class HypertensionChartComponent implements OnInit {

  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.monthly;

  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;

  constructor() { }

  ngOnInit(): void {
    this.initializaChartOptions();
  }

  private initializaChartOptions(): void{
    this.series = [{name: 'normal', data: [10, 3, 18]}]
    this.chart = {type: 'area', height:'180'}
  }

  public changedMatSelectionValue() {}

}
