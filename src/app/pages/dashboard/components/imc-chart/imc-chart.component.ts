import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
} from 'ng-apexcharts';
import { DashboardService } from '../../services';

enum matSelectedFields {
  daily = 'Daily',
  weekly = 'Weekly',
  monthly = 'Monthly',
}

@Component({
  selector: 'app-imc-chart',
  templateUrl: './imc-chart.component.html',
  styleUrls: ['./imc-chart.component.scss'],
})
export class ImcChartComponent implements OnInit {
  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.monthly;

  series: ApexAxisChartSeries;
  chart: ApexChart;

  dados: [any];

  constructor(private service: DashboardService) {}

   ngOnInit(): void {
    this.getResumoImc();
  }

  private getResumoImc(): void {
    this.service.getResumoImc().subscribe(
      (res) => {
        this.dados = res;
        this.inicializaChartOptions();
      },
      (err) => console.log(err)
    );
  }

  private inicializaChartOptions(): void {
    this.series = [{ name: 'Colaboradores', data: this.dados }];
    this.chart = { type: 'bar', height: '260' };
  }

  public changedMatSelectionValue() {}
}
