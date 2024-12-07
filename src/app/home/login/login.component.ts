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

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(loginForm: any): void {
    if (loginForm.valid) {
      // If the form is valid, proceed with login
      console.log('Login Details:', this.credentials);
      alert('Login Successful!');
      this.apiService.login(this.credentials).subscribe(
        (response) => {
          if (response.role === 'customer') {
            this.router.navigate(['./dashboard/customer-dashboard']);
          } else if (response.role === 'vendor') {
            this.router.navigate(['./dashboard/vendor-dashboard']);
          } else {
            alert('Unkown user role, Please contact support.')
          }
        },
        (error) => {
          alert('Login failed. Please try again.');
          console.error('Login failed', error);
        }
      );
    } else {
      // Show alerts for invalid fields
      if (!this.credentials.email) {
        alert('Email is required.');
      } else if (!this.credentials.password) {
        alert('Password is required.');
      } else {
        alert('Please enter valid credentials.');
      }
    }
  }
}
