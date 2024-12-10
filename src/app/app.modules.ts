import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import your rou
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule, HttpClientModule], // Set up the routes
  providers: [],
  bootstrap: []
})
export class AppModule {}
