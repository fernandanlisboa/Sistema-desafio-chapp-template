import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle } from 'ng-apexcharts';

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly'
}


@Component({
  selector: 'app-imc-chart',
  templateUrl: './imc-chart.component.html',
  styleUrls: ['./imc-chart.component.scss']
})
export class ImcChartComponent implements OnInit {

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
    this.chart = {type: 'bar', height:'180'}
  }

  public changedMatSelectionValue() {}

}
