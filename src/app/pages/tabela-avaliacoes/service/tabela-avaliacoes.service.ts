import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TabelaAvaliacoesService {
  constructor(private http: HttpClient) {}

  public getAvaliacoesColaborador(colabId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.api_avaliativo}/api/avaliacaos?filter={"where":{"colaborador":"${colabId}"}}`,
      httpOptions
    );
  }
}
