import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Player } from "../model/player";

import { StarService } from "../star.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [
    StarService
  ],
})
export class PlayersComponent implements OnInit {

  players: Player[];
  constructor( private starService: StarService) { }

  ngOnInit() {
    this.getPlayerList();
  }

  getPlayerList(): void {
    this.starService.getPlayers().then((players) => {
      this.players = players;
    })
  }

}
