import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss'],
})
export class VendorDashboardComponent implements OnInit {
  totalTickets: number = 0; // Total tickets in the system
  availableTickets: number = 0; // Tickets available for purchase
  ticketsSold: number = 0; // Tickets sold to customers
  releaseCount: number = 1; // Number of tickets to release
  activityLogs: string[] = []; // Activity logs for vendor actions

  ngOnInit(): void {
    this.initializeStats();
  }

  initializeStats(): void {
    // Fetch initial stats from the backend (replace with actual API call)
    this.totalTickets = 100; // Example data
    this.availableTickets = 80; // Example data
    this.ticketsSold = 20; // Example data
  }

  releaseTickets(): void {
    if (this.releaseCount > 0) {
      this.availableTickets += this.releaseCount;
      this.totalTickets += this.releaseCount;
      this.addLog(`Released ${this.releaseCount} tickets.`);
    }
  }

  addLog(message: string): void {
    this.activityLogs.unshift(`${new Date().toLocaleString()}: ${message}`);
    if (this.activityLogs.length > 50) {
      this.activityLogs.pop(); // Keep log size manageable
    }
  }

  logout(): void {
    // Implement logout functionality here
    console.log('Logged out');
  }
}
