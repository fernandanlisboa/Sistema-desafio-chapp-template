import { Component, Input, ViewChild } from '@angular/core';

import { SupportRequestData } from '../../models/support-request-data';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DashboardService } from '../../services';

@Component({
  selector: 'app-support-requests',
  templateUrl: './support-requests.component.html',
  styleUrls: ['./support-requests.component.scss'],
})
export class SupportRequestsComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  @Input() supportRequestData: SupportRequestData[] = undefined;
  public displayedColumns: string[] = [
    'email',
    'dataNascimento',
    'altura',
    'peso',
    'imc',
    'avaliacoes'
  ];
  dataSource = new MatTableDataSource<SupportRequestData>(
    this.supportRequestData
  );

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.getColaboradores();
  }

  public getColaboradores() {
    this.service.getColaboradores().subscribe((res) => {
      this.dataSource.data = res as SupportRequestData[];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res)
    });
  }
}
