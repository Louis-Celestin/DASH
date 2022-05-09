import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sondage } from 'src/app/views/sondages/sondage.model';

@Injectable({
  providedIn: 'root'
})
export class SondageService {

  baseURL = "http://localhost:3000/sondages";

  constructor(private httpClient: HttpClient) { }

  getSondages(): Observable<Sondage[]>{
    return this.httpClient.get<Sondage[]>(`${this.baseURL}`);
  }

  createSondage(sondage: Sondage): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, sondage);
  }
}
