import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
      `http://localhost:3000/api/colaboradors/${colabId}/avaliacoes`,
      httpOptions
    );
  }
}
