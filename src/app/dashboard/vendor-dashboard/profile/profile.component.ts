import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class VendorProfile {
  vendor = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contact: '123-456-7890',
  };

  constructor(private router: Router) {}

  // Navigate back to Vendor Dashboard
  goBack(): void {
    this.router.navigate(['/dashboard/vendor-dashboard']);
  }

  // Logout and redirect to HomeComponent
  logout(): void {
    localStorage.removeItem('authToken'); // Clear authentication token
    this.router.navigate(['/']); // Redirect to HomeComponent
  }
}
