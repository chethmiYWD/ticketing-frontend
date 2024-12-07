import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent {
  retrieveCount: number = 0; // Number of tickets the customer wants to retrieve
  ticketPool: number = 100; // Initial tickets available in the pool (for demo purposes)
  message: string = ''; // Feedback message for the customer

  // Method to retrieve tickets
  retrieveTickets(): void {
    if (this.retrieveCount <= 0) {
      this.message = 'Please enter a valid number of tickets.';
    } else if (this.retrieveCount > this.ticketPool) {
      this.message = `Only ${this.ticketPool} tickets are available. Please reduce the quantity.`;
    } else {
      this.ticketPool -= this.retrieveCount; // Decrease tickets from the pool
      this.message = `Successfully retrieved ${this.retrieveCount} ticket(s).`;
      this.retrieveCount = 0; // Reset the input field
    }
  }
}

