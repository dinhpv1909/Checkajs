import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api = 'https://669a7abd9ba098ed61ffccb3.mockapi.io/api/v1/lol/champion/'
@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient) { }

  peoples(): any{
    return this.http.get<any>(api)
  }

}
