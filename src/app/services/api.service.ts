import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://67abc78v1l.execute-api.us-east-2.amazonaws.com/dev/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    public httpClient: HttpClient
  ) {}

  // GET /sensors
  public getSensors(): Observable<any> {
    let url = BASE_URL + '/sensors';
    let options = this.getHttpOptions();
    return this.httpClient.get<any>(url, options);
  }

  private getHttpOptions(): any {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return options;
  }
}
