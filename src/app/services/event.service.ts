import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private baseUrl = 'http://localhost:8080/events'; // Update if backend endpoint is different

  constructor(private http: HttpClient) {}

  createEvent(event: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/events/add', event);
  }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  bookTicket(eventId: string) {
    return this.http.put<any>(`http://localhost:8080/events/${eventId}/bookTicket`, {});
  }
  
}
