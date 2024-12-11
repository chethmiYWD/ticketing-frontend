import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  customer = {
    name: '',
    email: '',
    password: '',
    phone: ''
  };

  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  // Form submission
  onSubmit(registerForm: any): void {
    if (registerForm.valid) {
      this.authService.registerCustomer(this.customer).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.successMessage = response.message || 'Registration successful!';
          window.alert('Submission complete! Registration successful.');
          this.router.navigate(['/']);
        },
        // Error message on unsuccessfull submission
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = error?.error?.message || 'Registration failed. Please try again.';
        },
        complete: () => {
          console.log('Request completed.');
        },
      });
    } else {
      this.validateForm();
    }
  }
  
  // Form validation
  private validateForm(): void {
    if (!this.customer.name) {
      this.errorMessage = 'Name is required.';
    } else if (!this.customer.email) {
      this.errorMessage = 'Email is required.';
    } else if (!this.customer.password) {
      this.errorMessage = 'Password is required.';
    } else if (!this.customer.phone) {
      this.errorMessage = 'Phone number is required.';
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
}
