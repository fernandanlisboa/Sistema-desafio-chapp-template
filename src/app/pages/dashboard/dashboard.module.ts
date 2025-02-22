import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import {AppRoutingModule} from '../../app-routing.module'

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'

import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { DashboardPageComponent } from './containers';
import {
  VisitsChartComponent,
  PerformanceChartComponent,
  ServerChartComponent,
  RevenueChartComponent,
  DailyLineChartComponent,
  SupportRequestsComponent,
  // ProjectStatChartComponent
} from './components';
import { SharedModule } from '../../shared/shared.module';
import { DashboardService } from './services';
import { HypertensionChartComponent } from './components/hypertension-chart/hypertension-chart.component';
import { ImcChartComponent } from './components/imc-chart/imc-chart.component';
import { UseChartComponent } from './components/use-chart/use-chart.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    VisitsChartComponent,
    PerformanceChartComponent,
    ServerChartComponent,
    RevenueChartComponent,
    DailyLineChartComponent,
    SupportRequestsComponent,
    HypertensionChartComponent,
    ImcChartComponent,
    UseChartComponent
    // ProjectStatChartComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatTableModule,
    NgxEchartsModule,
    TrendModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    NgApexchartsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    DailyLineChartComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
