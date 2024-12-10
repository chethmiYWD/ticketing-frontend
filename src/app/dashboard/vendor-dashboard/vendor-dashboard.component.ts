import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss'],
})
export class VendorDashboardComponent {
  events = [
    {
      id: 1,
      name: 'Music Festival',
      date: new Date('2024-12-20'),
      maxTickets: 1000,
      ticketsSold: 200,
      ticketPrice: 50,
    },
    {
      id: 2,
      name: 'Art Gallery Exhibition',
      date: new Date('2024-12-15'),
      maxTickets: 500,
      ticketsSold: 100,
      ticketPrice: 30,
    },
  ];

  newEvent = { name: '', date: '', maxTickets: 0, ticketPrice: 0 }; // Model for the new event form
  showAddEventForm = false; // Control the form visibility
  selectedEvent: any = null; // For displaying analytics for a selected event

  constructor(private router: Router) {}

  // Toggles visibility of the Add Event Form
  toggleAddEventForm(): void {
    this.showAddEventForm = !this.showAddEventForm;
  }

  goBack(): void {
    this.showAddEventForm = false; // Hide form
    this.router.navigate(['/dashboard/vendor-dashboard']); // Navigate back to Vendor Dashboard
  }

  // Submit the new event
  onSubmit(eventForm: any): void {
    if (eventForm.valid) {
      const newEvent = {
        ...this.newEvent,
        id: this.events.length + 1,
        ticketsSold: 0, // Initially no tickets sold
        date: new Date(this.newEvent.date), // Convert string to Date object
      };
      this.events.push(newEvent);
      this.newEvent = { name: '', date: '', maxTickets: 0, ticketPrice: 0 }; // Reset form
      this.showAddEventForm = false; // Hide form after submission
    }
  }
  

  // Select an event to view analytics
  viewEventAnalytics(event: any): void {
    this.selectedEvent = event;
  }
}
