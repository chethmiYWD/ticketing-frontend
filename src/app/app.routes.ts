import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { VendorDashboardComponent } from './dashboard/vendor-dashboard/vendor-dashboard.component';
import { CustomerDashboardComponent } from './dashboard/customer-dashboard/customer-dashboard.component';
import { HistoryComponent } from './dashboard/customer-dashboard/history/history.component';
import { ProfileComponent } from './dashboard/customer-dashboard/profile/profile.component';
import { MyEventsComponent } from './dashboard/vendor-dashboard/my-events/my-events.component';
import { VendorProfileComponent } from './dashboard/vendor-dashboard/profile/profile.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'register', component: RegisterComponent }, // Register route
  { path: 'vendor-dashboard', component: VendorDashboardComponent },
  { path: 'vendor-dashboard/my-events', component: MyEventsComponent },
  { path: 'dashboard/vendor-dashboard/profile', component: ProfileComponent},
  { path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'dashboard/customer-dashboard/history', component: HistoryComponent },
  { path: 'dashboard/customer-dashboard/profile', component: ProfileComponent },
  { path: '**', redirectTo: '' }, // Redirect invalid routes to Home
];


