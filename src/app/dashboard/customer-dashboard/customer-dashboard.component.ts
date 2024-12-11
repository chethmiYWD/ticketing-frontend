import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent implements OnInit {
  events: any[] = []; // All events fetched from the backend
  filteredEvents: any[] = []; 
  searchQuery: string = ''; // Search query input by the user

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchEvents(); // Fetch events when the component initializes
  }

  // Fetch events from the backend
  fetchEvents(): void {
    this.eventService.getEvents().subscribe(
      (data) => {
        console.log('Fetched events:', data);
        this.events = data; 
        this.filteredEvents = [...this.events];
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

  // Navigate to event details 
  viewEventDetails(event: any): void {
    console.log('View event details:', event);
  }

  // Book a ticket for the selected event
  bookTicket(event: any, e: Event): void {
    e.stopPropagation();
    this.eventService.bookTicket(event.id).subscribe(
      (updatedEvent) => {
        window.alert(`Ticket for "${event.name}" has been booked successfully!`);
        console.log('Updated event:', updatedEvent);
        event.ticketsSold = updatedEvent.ticketsSold; 
      },
      (error) => {
        console.error('Error booking ticket:', error);
      }
    );
  }

  // Logout method
  logout(): void {
    this.authService.logout(); 
    this.router.navigate(['/']); // Redirect to login page
  }
}