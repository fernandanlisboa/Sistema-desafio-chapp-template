import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private http: HttpClient) { }

  public getResumoImc(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/colaboradors/medidas/resumo/imc', httpOptions)
  }

  public getResumoHipertensao(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/avaliacaos/resumo/hipertensao', httpOptions)
  }

  public getResumoNovosCadastros(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/colaboradors/num/cadastros', httpOptions)
  }

  public getResumoAvaliaçõesRealizadas(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/avaliacaos/num/realizadas', httpOptions)
  }

}
