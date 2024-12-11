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
    // Fetch events when the component initializes
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data; // Assign data to `events` property
      },
      (error) => {
        console.error('Error fetching events:', error); // Handle errors
      }
    );
  }

  // Search events by name or artist
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
    // Navigation logic for viewing event details
  }

  // Book a ticket for the selected event
  bookTicket(event: any, e: Event): void {
    e.stopPropagation(); // Prevent triggering parent click event
    console.log('Booking ticket for:', event);
    // Logic to book tickets can be added here
  }
}
