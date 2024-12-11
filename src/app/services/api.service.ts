import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class AuthService {
//   private baseUrl = 'http://localhost:8080';  // Your backend API base URL

//   constructor(private http: HttpClient) {}

//   // Customer Registration
//   registerCustomer(customer: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/customers/register`, customer);
//   }

export class AuthService {
  private apiUrl = 'http://localhost:8080/customers'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  registerCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, customer);
  }
 
}
