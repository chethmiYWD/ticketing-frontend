import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      this.errorMessage = null; // Clear any previous errors
      this.apiService.login(this.credentials).subscribe(
        (response) => {
          if (response.role === 'customer') {
            this.router.navigate(['./dashboard/customer-dashboard']);
          } else if (response.role === 'vendor') {
            this.router.navigate(['./dashboard/vendor-dashboard']);
          } else {
            this.errorMessage = 'Unknown user role. Please contact support.';
          }
        },
        (error) => {
          this.errorMessage = 'Login failed. Please check your credentials and try again.';
          console.error('Login failed', error);
        }
      );
    } else {
      this.validateForm();
    }
  }

  private validateForm(): void {
    if (!this.credentials.email) {
      this.errorMessage = 'Email is required.';
    } else if (!this.credentials.password) {
      this.errorMessage = 'Password is required.';
    } else {
      this.errorMessage = 'Please enter valid credentials.';
    }
  }
}
