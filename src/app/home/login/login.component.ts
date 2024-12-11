import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';  // Add the errorMessage property

  constructor(private http: HttpClient, private router: Router) {}

  login(form: any) {
    if (form.invalid) {
      return; // Prevent submission if the form is invalid
    }

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/auth/login', loginData)
  .subscribe(
    (response: any) => {
      console.log('Login successful:', response);
      console.log('User role:', response.role); // Log the role
      // Redirect based on role
      if (response.role === 'Customer') {
        this.router.navigate(['/customer-dashboard']);
      } else if (response.role === 'Vendor') {
        this.router.navigate(['/vendor-dashboard']);
      } else {
        console.error('Unknown role:', response.role);
      }
    },
    (error) => {
      console.error('Login error:', error);
      this.errorMessage = 'Invalid email or password';  // Set the error message
    }
  );
}
}


//   private validateForm(): void {
//     // Simple form validation
//     if (!this.credentials.email) {
//       this.errorMessage = 'Email is required.';
//     } else if (!this.credentials.password) {
//       this.errorMessage = 'Password is required.';
//     } else {
//       this.errorMessage = 'Please provide valid credentials.';
//     }
//   }
// }
