import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomService } from './room.service';
import { RegistrationComponent } from './registration/registration.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, RoomsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [RoomService],
  bootstrap: [AppComponent],
})
export class AppModule {}
