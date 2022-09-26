import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  private registrationService: RegistrationService;
  private roomService: RoomService;

  constructor(
    registrationService: RegistrationService,
    roomService: RoomService
  ) {
    this.registrationService = registrationService;
    this.roomService = roomService;
  }

  ngOnInit(): void {}

  public registerAGuest() {
    alert('register');
    var rooms = this.roomService.getRooms();
    console.log(rooms);
    debugger;
  }
}
