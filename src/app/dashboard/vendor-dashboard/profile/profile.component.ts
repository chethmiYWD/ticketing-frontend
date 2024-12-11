import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class VendorProfileComponent implements OnInit {
  vendor: any = {};  // Store vendor details

  constructor(private router: Router, private profileService: VendorProfileService) {}

  ngOnInit(): void {
    this.fetchVendorProfile();  // Fetch vendor profile on initialization
  }

  // Fetch vendor profile details from the backend
  fetchVendorProfile(): void {
    this.profileService.getVendorProfile().subscribe(
      (profile) => {
        this.vendor = profile;  // Store the fetched profile
      },
      (error) => {
        console.error('Error fetching vendor profile:', error);
      }
    );
  }
  // Navigate back to Vendor Dashboard
  goBack(): void {
    this.router.navigate(['/dashboard/vendor-dashboard']);
  }

  // Logout and redirect to HomeComponent
  logout(): void {
    localStorage.removeItem('authToken'); // Clear authentication token
    this.router.navigate(['/']); // Redirect to HomeComponent
  }
}
