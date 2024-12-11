import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  errorMessage: string | null = null; // Error message display

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      this.errorMessage = null; // Clear previous errors
      this.authService.login(this.credentials).subscribe(
        (response) => {
          // Navigate based on user role
          // if (response.role === 'Customer') {
          //   this.router.navigate(['/dashboard/customer-dashboard']);
          // } else if (response.role === 'Vendor') {
          //   this.router.navigate(['/dashboard/vendor-dashboard']);
          // } else {
          //   this.errorMessage = 'Unknown user role. Please contact support.';
          // }
        },
        (error) => {
          // Display error message for login failure
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
          console.error('Login error:', error);
        }
      );
    } else {
      this.validateForm();
    }
  }

  private validateForm(): void {
    // Simple form validation
    if (!this.credentials.email) {
      this.errorMessage = 'Email is required.';
    } else if (!this.credentials.password) {
      this.errorMessage = 'Password is required.';
    } else {
      this.errorMessage = 'Please provide valid credentials.';
    }
  }
}
