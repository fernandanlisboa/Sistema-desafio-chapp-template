import { Component, OnInit} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
} from 'ng-apexcharts';
import { colors } from 'src/app/consts';
import { DashboardService } from '../../services';

enum matSelectedFields {
  daily = 'Daily',
  monthly = 'Monthly',
}

export interface Resumo {
  diario: [{ x: string; y: number }];
  mensal: [{ x: string; y: number }];
  anual: [{ x: string; y: number }];
}

@Component({
  selector: 'app-use-chart',
  templateUrl: './use-chart.component.html',
  styleUrls: ['./use-chart.component.scss'],
})
export class UseChartComponent implements OnInit{
  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.monthly;

  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  chartColors: any[];
  dataLabels: ApexDataLabels;

  resumoCadastros: Resumo;
  resumoAvaliacoes: Resumo;

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.getResumoAvaliacoesRealizadas();
    this.getResumoNovosCadastros();
  }

  private async getResumoNovosCadastros(): Promise<void> {
    await this.service.getResumoNovosCadastros().subscribe(
      (res) => {
        this.resumoCadastros = res[0];
        if (
          this.resumoCadastros !== undefined &&
          this.resumoAvaliacoes !== undefined
        ) {
          console.log(this.resumoCadastros);
          this.initializaChartOptions(
            this.resumoCadastros.mensal,
            this.resumoAvaliacoes.mensal
          );
        }
      },
      (err) => console.log(err)
    );
  }

  private async getResumoAvaliacoesRealizadas(): Promise<void> {
    await this.service.getResumoAvaliacoesRealizadas().subscribe(
      (res) => {
        this.resumoAvaliacoes = res[0];
      },
      (err) => console.log(err)
    );
  }

  private initializaChartOptions(dadosCadastros, dadosAvaliacoes): void {
    this.chart = { type: 'line', height: '380px' };
    this.series = [
      { name: 'Cadastros', data: dadosCadastros },
      { name: 'Avaliacoes', data: dadosAvaliacoes },
    ];

    this.chartColors = [colors.YELLOW, colors.BLUE];
    this.dataLabels = { enabled: true };

    this.xaxis = {
      type: 'datetime',
      labels: {
        style: {
          colors: '#4A4A4A',
          fontSize: '0.875rem',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fontWeight: 400,
        },
      },
    };
  }

  public changedMatSelectionValue() {
    switch (this.selectedMatSelectValue) {
      case matSelectedFields.daily:
        this.series = [
          { name: 'Cadastros', data: this.resumoCadastros.diario },
          { name: 'Avaliacoes', data: this.resumoAvaliacoes.diario },
        ];
        break;
      case matSelectedFields.monthly:
        this.series = [
          { name: 'Cadastros', data: this.resumoCadastros.mensal },
          { name: 'Avaliacoes', data: this.resumoAvaliacoes.mensal },
        ];
        break;
    }
  }
}
