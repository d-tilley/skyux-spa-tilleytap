import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://cusvfubnx1.execute-api.us-east-2.amazonaws.com/dev';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    public httpClient: HttpClient
  ) {}

  // GET /users/{userid}
  public getUser(userId: string): Observable<any> {
    let url = `${BASE_URL}/users/${userId}`;
    let options = this.getHttpOptions();
    return this.httpClient.get<any>(url, options);
  }

  // GET /sensors/{sensorid}
  public getSensor(sensorId: string): Observable<any> {
    let url = `${BASE_URL}/sensors/${sensorId}`;
    let options = this.getHttpOptions();
    return this.httpClient.get<any>(url, options);
  }

  // GET /brewerydb/beers/{beerid}
  public getBeer(beerId: string): Observable<any> {
    let url = `${BASE_URL}/brewerydb/beers/${beerId}`;
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
