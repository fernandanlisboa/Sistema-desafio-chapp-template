import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly'
}

@Component({
  selector: 'app-use-chart',
  templateUrl: './use-chart.component.html',
  styleUrls: ['./use-chart.component.scss']
})
export class UseChartComponent implements OnInit {

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
    // this.title={
    //   text: 'Hipertensão Arterial'
    // };

    this.series = [{name: 'normal', data: [10, 3, 18]}]
    this.chart = {type: 'line', height:'380px'}
  }

  public changedMatSelectionValue() {}
}
