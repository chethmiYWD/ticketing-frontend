import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent {
  searchQuery: string = ''; // Holds the search term
  events = [
    {
      id: 1,
      name: 'Concert of the Century',
      date: new Date('2024-12-25'),
      imageUrl: 'assets/images/event1.jpg',
      details: 'An amazing concert by popular artists.',
    },
    {
      id: 2,
      name: 'Art Expo',
      date: new Date('2024-12-10'),
      imageUrl: 'assets/images/event2.jpg',
      details: 'Explore the world of contemporary art.',
    },
    {
      id: 3,
      name: 'Tech Conference',
      date: new Date('2024-12-15'),
      imageUrl: 'assets/images/event3.jpg',
      details: 'Innovations and advancements in technology.',
    },
  ];

  filteredEvents = [...this.events]; // Clone of events array to filter

  // Handles search input
  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredEvents = this.events.filter(
      (event) =>
        event.name.toLowerCase().includes(query) ||
        event.details.toLowerCase().includes(query)
    );
  }

  // Navigate to event details page
  viewEventDetails(event: any): void {
    console.log('Viewing details for:', event);
    alert(`Event Details:\n${event.name}\n${event.details}`);
  }

  // Handles booking tickets
  bookTicket(event: any, eventClick: Event): void {
    eventClick.stopPropagation(); // Prevents parent click event
    console.log('Booking ticket for:', event);
    alert(`Ticket booked for ${event.name} on ${event.date.toDateString()}`);
  }
}


