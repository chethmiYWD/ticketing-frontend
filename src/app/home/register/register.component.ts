import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  customer: { [key: string]: any } = { email: '', password: '', contact: '' };

  onSubmit(registerForm: any): void {
    if (registerForm.valid) {
      console.log('Customer Registration:', this.customer);
      alert('Registration Successful!');
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}
