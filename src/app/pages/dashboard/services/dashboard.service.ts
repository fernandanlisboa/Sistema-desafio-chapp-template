import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

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
    return this.http.get<any>(`${environment.api_colab}/api/colaboradors/medidas/resumo/imc`, httpOptions)
  }

  public getResumoHipertensao(): Observable<any> {
    return this.http.get<any>(`${environment.api_avaliativo}/api/avaliacaos/resumo/hipertensao`, httpOptions)
  }

  public getResumoNovosCadastros(): Observable<any> {
    return this.http.get<any>(`${environment.api_colab}/api/colaboradors/num/cadastros`, httpOptions)
  }

  public getResumoAvaliacoesRealizadas(): Observable<any> {
    return this.http.get<any>(`${environment.api_avaliativo}/api/avaliacaos/num/realizadas`, httpOptions)
  }

  public getColaboradores(): Observable<any> {
    return this.http.get<any>(`${environment.api_colab}/api/colaboradors`, httpOptions)
  }

}
