import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TheMostStarsComponent } from './the-most-stars/the-most-stars.component';
import { PlayersComponent } from './players/players.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ClubsComponent } from './clubs/clubs.component';

@NgModule({
  declarations: [
    AppComponent,
    TheMostStarsComponent,
    PlayersComponent,
    CoachesComponent,
    ClubsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
