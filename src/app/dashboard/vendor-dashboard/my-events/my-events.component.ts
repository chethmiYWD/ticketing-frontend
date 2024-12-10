import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss'],
})
export class MyEventsComponent {
  events = [
    {
      id: 1,
      name: 'Music Fest',
      date: new Date('2024-12-20'),
      maxTickets: 500,
      ticketsSold: 250,
      ticketPrice: 50,
    },
    {
      id: 2,
      name: 'Art Expo',
      date: new Date('2024-12-15'),
      maxTickets: 300,
      ticketsSold: 200,
      ticketPrice: 30,
    },
    {
      id: 3,
      name: 'Tech Talk',
      date: new Date('2024-12-10'),
      maxTickets: 150,
      ticketsSold: 100,
      ticketPrice: 100,
    },
  ];

  constructor(private router: Router) {}

  // Navigate back to the Vendor Dashboard
  goBack(): void {
    this.router.navigate(['/dashboard/vendor-dashboard']);
  }
}
