import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Import your rou
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthService } from './services/api.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule, FormsModule, AppComponent], // Set up the routes
  providers: [AuthService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: []
})
export class AppModule {}
