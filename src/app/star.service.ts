import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Http, Response,URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';

import { Club } from "./model/club";
import { Player } from "./model/player";
import { Coach } from "./model/coach";

@Injectable()
export class StarService {

  public players: Player[];
  public coaches: Coach[];
  public clubs: Club[];
  constructor(private http: Http) {  }

  private static handleError(error: any): Promise<any> {
      return Promise.reject(error.message || error);
  }

  getPlayers(): Promise<Player[]> {
      let Params: URLSearchParams = new URLSearchParams();
      Params.set('Param',"1");

      let requestOption: RequestOptions = new RequestOptions();
      requestOption.search = Params;

            console.log("url");

      return this.http.get( "/api/server.php" , requestOption )
      .toPromise()
      .then((response:Response) => {
        let Players = [];
        let response_data = response.json();

        for (let player of response_data) {
          Players.push(player);
        }
        return Players;
      })
      .catch(StarService.handleError);
  }

  getPlayer(id: string): Promise<Player> {
      let Params: URLSearchParams = new URLSearchParams();
      Params.set('Param',"1");

      let requestOption: RequestOptions = new RequestOptions();
      requestOption.search = Params;

            console.log("url");

      return this.http.get( "/api/server.php" , requestOption )
      .toPromise()
      .then((response:Response) => {
        let Player;
        let response_data = response.json();

        for (let player of response_data) {
          if ( player['id'] == id)
              Player = player;
        }
        return Player;
      })
      .catch(StarService.handleError);
  }

  getCoaches(): Promise<Coach[]> {
      let Params: URLSearchParams = new URLSearchParams();
      Params.set('Param',"2");

      let requestOption: RequestOptions = new RequestOptions();
      requestOption.search = Params;

            console.log("url");

      return this.http.get( "/api/server.php" , requestOption )
      .toPromise()
      .then((response:Response) => {
        let Coaches = [];
        let response_data = response.json();

        for (let coach of response_data) {
          Coaches.push(coach);
        }
        return Coaches;
      })
      .catch(StarService.handleError);
  }

  getCoach(id: string): Promise<Coach> {
      let Params: URLSearchParams = new URLSearchParams();
      Params.set('Param',"2");

      let requestOption: RequestOptions = new RequestOptions();
      requestOption.search = Params;

            console.log("url");

      return this.http.get( "/api/server.php" , requestOption )
      .toPromise()
      .then((response:Response) => {
        let Coach;
        let response_data = response.json();

        for (let coach of response_data) {
          if (coach['id'] == id) {
            Coach = coach;
          }
        }
        return Coach;
      })
      .catch(StarService.handleError);
  }

  getClubs(): Promise<Club[]> {
      let Params: URLSearchParams = new URLSearchParams();
      Params.set('Param',"3");

      let requestOption: RequestOptions = new RequestOptions();
      requestOption.search = Params;

            console.log("url");

      return this.http.get( "/api/server.php" , requestOption )
      .toPromise()
      .then((response:Response) => {
        let Clubs = [];
        let response_data = response.json();

        for (let club of response_data) {
          Clubs.push(club);
        }
        return Clubs;
      })
      .catch(StarService.handleError);
  }

  getClub(id: string): Promise<Club> {
      let Params: URLSearchParams = new URLSearchParams();
      Params.set('Param',"3");

      let requestOption: RequestOptions = new RequestOptions();
      requestOption.search = Params;

            console.log("url");

      return this.http.get( "/api/server.php" , requestOption )
      .toPromise()
      .then((response:Response) => {
        let Club;
        let response_data = response.json();

        for (let club of response_data) {
          if (club['id'] == id) {
            Club = club;
          }
        }
        return Club;
      })
      .catch(StarService.handleError);
  }

}
