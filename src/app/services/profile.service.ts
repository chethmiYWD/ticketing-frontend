import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VendorProfileService {
  private apiUrl = 'http://localhost:8080/vendor/profile';  // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  // Fetch vendor profile details from the backend
  getVendorProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
