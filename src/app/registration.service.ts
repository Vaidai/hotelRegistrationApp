import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Registrations } from './model/registrations';
import { Guest } from './model/guest';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAllRegistrations() {
    return this.http.get<Registrations[]>(
      `${this.apiServiceUrl}/registration/all`
    );
  }

  public registerAGuest(guest: Guest) {
    return this.http.post<string>(
      `${this.apiServiceUrl}/registration/register`,
      guest
    );
  }

  public checkOutAGuest(roomId: number) {
    return this.http.put<string>(
      `${this.apiServiceUrl}/registration/checkOut/${roomId}`,
      roomId
    );
  }

  public showCheckedInRooms() {
    return this.http.get<Registrations[]>(
      `${this.apiServiceUrl}/registration/showCheckedInRooms`
    );
  }

  public showRoomHistory(roomId: number) {
    return this.http.get<Registrations[]>(
      `${this.apiServiceUrl}/registration/showRoomHistory/${roomId}`
    );
  }
}
