import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:9090/api/';
  constructor(private http: HttpClient) {}

  getSymbols(): Observable<any>{
    return this.http.get(this.apiUrl+'symbols');
  }
  getHistorical(): Observable<any>{
    return this.http.get(this.apiUrl+'historical');
  }
  getHistoricalNemo(nemo: string): Observable<any>{
    return this.http.get(this.apiUrl+'historical' + '/' + nemo);
  }
}
