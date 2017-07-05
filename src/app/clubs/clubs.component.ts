import { Component, OnInit } from '@angular/core';
import { StarService } from "../star.service";

import { Club } from "../model/club";

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css'],
  providers: [
      StarService
  ],
})
export class ClubsComponent implements OnInit {

  Clubs: Club[];
  constructor(private starService: StarService) { }

  ngOnInit() {
    this.getClubList();
  }

  getClubList(): void {
    this.starService.getClubs()
    .then((clubs) => {
        this.Clubs = clubs;
    });
  }

}
