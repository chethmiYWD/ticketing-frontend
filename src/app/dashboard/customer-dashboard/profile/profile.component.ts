import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(private router: Router) {}

  // Method to navigate back to the dashboard
  goBack(): void {
    this.router.navigate(['/dashboard/customer-dashboard']);
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Clear authentication token
    this.router.navigate(['/']); // Redirect to HomeComponent
  }
}
