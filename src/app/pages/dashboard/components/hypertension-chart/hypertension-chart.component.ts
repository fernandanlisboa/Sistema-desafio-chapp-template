import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
} from 'ng-apexcharts';
import { DashboardService } from '../../services';
import { colors } from 'src/app/consts';

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly',
}

@Component({
  selector: 'app-hypertension-chart',
  templateUrl: './hypertension-chart.component.html',
  styleUrls: ['./hypertension-chart.component.scss'],
})
export class HypertensionChartComponent implements OnInit {
  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.monthly;

  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  chartColors: any[];

  dados: [any];

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.getResumoHipertensao();
  }

  private getResumoHipertensao(): void {
    this.service.getResumoHipertensao().subscribe(
      (res) => {
        this.dados = res;
        this.inicializaChartOptions();
      },
      (err) => console.log(err)
    );
  }

  private inicializaChartOptions(): void {
    this.series = [{ name: 'Colaboradores', data: this.dados }];
    this.chart = { type: 'area', height: '260' };
    this.xaxis = {labels:{rotate: -18, rotateAlways: true}}
    this.chartColors = [colors.PINK];
  }

  public changedMatSelectionValue() {}
}
