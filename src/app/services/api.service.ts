import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {}

  registerCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, customer);
  }

  logout(): void {
    // Logic to clear user authentication, such as removing tokens from localStorage
    localStorage.removeItem('authToken');  // Assuming the auth token is stored in localStorage
    this.router.navigate(['/']); // Navigate back to the login page or home page
  }
}
