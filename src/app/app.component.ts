import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Guest } from './model/guest';
import { Room } from './model/room';
import { RegistrationService } from './registration.service';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HOTEL REGISTRATION';
  private registrationService: RegistrationService;

  constructor(registrationService: RegistrationService) {
    this.registrationService = registrationService;
  }

  public registerAGuest() {
    const guest: Guest = { firstName: 'fn', lastName: 'ln' };
    this.registrationService.registerAGuest(guest).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  public checkOut(roomId: number) {
    this.registrationService.checkOutAGuest(roomId).subscribe((data) => {
      if (data) {
        showSuccessMessage();
      }
    });
  }

  public showCheckedInRooms(roomId: number) {
    this.registrationService.showCheckedInRooms().subscribe((data) => {});
  }

  public showRoomHistory(roomId: number) {
    this.registrationService.showRoomHistory(roomId).subscribe((data) => {});
  }

  private showSuccessMessage() {}
}
