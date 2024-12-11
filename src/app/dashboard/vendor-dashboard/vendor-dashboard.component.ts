import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service'; // Import EventService
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vendor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // Ensure FormsModule is here
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss'],
})
export class VendorDashboardComponent implements OnInit {
  events: any[] = []; // Holds events fetched from the backend
  newEvent = {
    name: '',
    date: '',
    maxTickets: 0,
    ticketPrice: 0,
    totalTickets: 0,
    ticketReleaseRate: 0,
  };
  showAddEventForm = false; // Control the form visibility
  selectedEvent: any = null; // For displaying analytics for a selected event

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents(); // Fetch events when the component is initialized
  }

  // Toggles visibility of the Add Event Form
  toggleAddEventForm(): void {
    this.showAddEventForm = !this.showAddEventForm;
  }

  goBack(): void {
    this.showAddEventForm = false; // Hide form
    this.router.navigate(['/dashboard/vendor-dashboard']); // Navigate back to Vendor Dashboard
  }

  // Submit the new event
  // Submit the new event
  onSubmit(eventForm: any): void {
    if (eventForm.valid) {
      const newEvent = {
        ...this.newEvent,
        ticketsSold: 0,
        date: new Date(this.newEvent.date),
      };
  
      this.eventService.createEvent(newEvent).subscribe(
        (response) => {
          console.log('Event created successfully:', response);
          this.events.push(response);
          this.newEvent = { name: '', date: '', maxTickets: 0, ticketPrice: 0, totalTickets: 0, ticketReleaseRate: 0 };
          this.showAddEventForm = false;
          this.router.navigateByUrl('/dashboard/vendor-dashboard').then(() => {
            console.log('Redirected successfully!');
          });
        },
        (error) => {
          console.error('Error creating event:', error);
          if (error.status === 404) {
            console.error('API endpoint not found. Check the URL in EventService.');
          } else if (error.status === 0) {
            console.error('Network error. Backend may not be running.');
          } else {
            console.error(`Unexpected error: ${error.message}`);
          }
        }
      );
    }
  }
  
  fetchEvents(): void {
    this.eventService.getEvents().subscribe(
      (events) => {
        console.log('Fetched events:', events);
        this.events = events;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  // Update the tickets sold when a ticket is booked
  bookTicket(eventId: string): void {
    this.eventService.bookTicket(eventId).subscribe(
      (updatedEvent) => {
        console.log('Ticket booked successfully:', updatedEvent);
        this.fetchEvents(); // Refresh the events to get the updated tickets sold
      },
      (error) => {
        console.error('Error booking ticket:', error);
      }
    );
  }
}