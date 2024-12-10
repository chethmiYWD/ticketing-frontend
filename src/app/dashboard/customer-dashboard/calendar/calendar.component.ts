import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  constructor(private router: Router) {}

  // Method to navigate back to the dashboard
  goBack(): void {
    this.router.navigate(['/dashboard/customer-dashboard']);
  }
}
