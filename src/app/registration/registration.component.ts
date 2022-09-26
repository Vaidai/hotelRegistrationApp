import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  private roomService: RoomService;
  title: string = 'Registration';

  constructor(roomService: RoomService) {
    this.roomService = roomService;
  }

  ngOnInit(): void {}
}
