import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://localhost:8080/customers';
  constructor(private http: HttpClient, private router: Router) {}

  // Customer registration
  registerCustomer(customer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, customer);
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('authToken');  
    this.router.navigate(['/']); // Navigate back to the login page or home page
  }
}
