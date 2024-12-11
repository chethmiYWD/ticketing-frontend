import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class VendorProfileComponent implements OnInit {
  vendor: any = {};  // Object to store vendor details
  email: string = '';  // Store the vendor email, it can be fetched from localStorage, session, or auth token

  constructor(private router: Router, private profileService: VendorProfileService) {}

  ngOnInit(): void {
    // Fetch the vendor email (from a saved location such as localStorage or auth token)
    this.email = localStorage.getItem('vendorEmail') || '';  // Modify as needed

    // Fetch the vendor profile using the service
    if (this.email) {
      this.fetchVendorProfile(this.email);
    } else {
      console.error('Email not found. Please log in first.');
    }
  }

  // Fetch vendor profile from the backend
  fetchVendorProfile(email: string): void {
    this.profileService.getVendorProfile(email).subscribe(
      (profile) => {
        console.log('Fetched Vendor Profile:', profile);  // Log the profile for debugging
        this.vendor = profile;  // Assign the fetched profile to the vendor object
      },
      (error) => {
        console.error('Error fetching vendor profile:', error);
      }
    );
  }
  // Navigate back to Vendor Dashboard
  goBack(): void {
    this.router.navigate(['/vendor-dashboard']);
  }

  // Logout and redirect to HomeComponent
  logout(): void {
    localStorage.removeItem('authToken'); // Clear authentication token
    this.router.navigate(['/']); // Redirect to HomeComponent
  }
}
