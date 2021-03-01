import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaAvaliacoesService } from './service/tabela-avaliacoes.service';
import { NgxEchartsModule } from 'ngx-echarts';

import { MatTableModule } from '@angular/material/table';
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
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabelaAvaliacoesComponent } from './tabela-avaliacoes.component';


@NgModule({
  declarations: [TabelaAvaliacoesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    NgxEchartsModule,
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
    SharedModule
  ],
  providers:[TabelaAvaliacoesService]
})
export class TabelaAvaliacoesModule { }
