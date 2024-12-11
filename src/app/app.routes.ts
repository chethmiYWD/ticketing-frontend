import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { VendorDashboardComponent } from './dashboard/vendor-dashboard/vendor-dashboard.component';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard/customer-dashboard.component';
import { MyEventsComponent } from './dashboard/vendor-dashboard/my-events/my-events.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'register', component: RegisterComponent }, // Register route
  { path: 'vendor-dashboard', component: VendorDashboardComponent },
  { path: 'vendor-dashboard/my-events', component: MyEventsComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: '**', redirectTo: '' }, // Redirect invalid routes to Home
];


