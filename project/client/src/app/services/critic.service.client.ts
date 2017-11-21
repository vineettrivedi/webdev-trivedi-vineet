import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../../../../src/environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class CriticService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createCritic(critic: any) {
    return this._http.post(this.baseUrl + '/api/critic', critic)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCriticById(criticId: string) {
    return this._http.get(this.baseUrl + '/api/critic/' + criticId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCriticByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/critic/?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findCriticByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/critic/?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateCritic(criticId: string, critic: any) {
    return this._http.put(this.baseUrl + '/api/critic/' + criticId, critic)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteCritic(criticId: string) {
    this._http.delete(this.baseUrl + '/api/critic/' + criticId);
  }

}
