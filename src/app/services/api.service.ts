import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private loginUrl = 'https://your-backend-api.com/login'; // Replace with your backend login URL

  constructor(private httpClient: HttpClient) {}

  // POST method for login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.httpClient.post<any>(this.loginUrl, credentials);
  }
}
