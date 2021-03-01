import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Avaliacao } from './models/tabela-avaliacoes-data';
import { TabelaAvaliacoesService } from './service/tabela-avaliacoes.service';

@Component({
  selector: 'app-tabela-avaliacoes',
  templateUrl: './tabela-avaliacoes.component.html',
  styleUrls: ['./tabela-avaliacoes.component.scss'],
})
export class TabelaAvaliacoesComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  ELEMENT_DATA: Avaliacao[] = [];
  displayedColumns: string[] = [
    'dataHora',
    'pulso',
    'pressaoSistolica',
    'pressaoDiastolica',
    'hipertensao',
  ];
  dataSource = new MatTableDataSource<Avaliacao>(this.ELEMENT_DATA);

  public colabId: string;

  constructor(
    private service: TabelaAvaliacoesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.colabId = params.get('id');
    });
  }

  ngAfterViewInit() {
    this.getAvaliacoesColaborador(this.colabId);
  }

  public getAvaliacoesColaborador(colabId) {
    this.service.getAvaliacoesColaborador(colabId).subscribe(
      (res) => {
        console.log(res);
        this.dataSource.data = res as Avaliacao[];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.ELEMENT_DATA = res as Avaliacao[];
      },
      (err) => console.log(err)
    );
  }
}
