import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL for your backend

  constructor(private httpClient: HttpClient) {}

  // POST method for login
  login(credentials: { email: string; password: string }): Observable<any> {
    const loginEndpoint = `${this.baseUrl}/auth/login`; // Full login URL
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post<any>(loginEndpoint, credentials, { headers });
  }

  // Generic GET method
  get<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.get<T>(url);
  }

  // Generic POST method
  post<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<T>(url, data, { headers });
  }

  // Generic PUT method
  put<T>(endpoint: string, data: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<T>(url, data, { headers });
  }

  // Generic DELETE method
  delete<T>(endpoint: string): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.httpClient.delete<T>(url);
  }
}
