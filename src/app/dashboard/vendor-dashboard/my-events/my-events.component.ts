import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss'],
})
export class MyEventsComponent implements OnInit {
  events: any[] = [];  // Holds events fetched from the backend

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.fetchEvents();  // Fetch events when the component is initialized
  }

  // Fetch all events from the backend
  fetchEvents(): void {
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events;  // Store the fetched events
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  // Navigate back to the vendor dashboard
  goBack(): void {
    this.router.navigate(['/vendor-dashboard']);
  }
}