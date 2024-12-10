import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  constructor(private router: Router) {}

  // Method to navigate back to the dashboard
  goBack(): void {
    this.router.navigate(['/dashboard/customer-dashboard']);
  }
}
