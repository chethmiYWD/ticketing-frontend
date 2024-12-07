import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    // Handle logout logic
    localStorage.removeItem('authToken'); // Example: Remove token from localStorage
    this.router.navigate(['/login']); // Redirect to login page
  }
}
