import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent implements OnInit {
  events: any[] = []; // All events fetched from the backend
  filteredEvents: any[] = []; // Filtered events for search functionality
  searchQuery: string = ''; // Search query input by the user

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents(); // Fetch events when the component initializes
  }

  // Fetch events from the backend
  fetchEvents(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        console.log('Fetched events:', data);
        this.events = data; // Populate the events array
        this.filteredEvents = [...this.events]; // Initially display all events
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  // Filter events by name or artist
  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredEvents = this.events.filter(
      (event) =>
        event.name.toLowerCase().includes(query) ||
        (event.artist && event.artist.toLowerCase().includes(query))
    );
  }

  // Navigate to event details (to be implemented)
  viewEventDetails(event: any): void {
    console.log('View event details:', event);
    // Logic to navigate to event details page (e.g., using Router)
  }

  // Book a ticket for the selected event
  bookTicket(event: any, e: Event): void {
    e.stopPropagation(); // Prevent triggering parent click event
    console.log('Booking ticket for:', event);

    // Simulating ticket booking logic
    // You can add logic here to interact with the backend if required
    window.alert(`Ticket for "${event.name}" has been booked successfully!`);
  }
}
