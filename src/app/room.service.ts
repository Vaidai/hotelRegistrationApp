import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './model/room';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiServiceUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiServiceUrl}/room/all`);
  }

  public addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.apiServiceUrl}/room/add`, room);
  }
}
