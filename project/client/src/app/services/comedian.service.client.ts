import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../../../../src/environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class ComedianService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createComedian(comedian: any) {
    return this._http.post(this.baseUrl + '/api/comedian', comedian)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findComedianById(comedianId: string) {
    return this._http.get(this.baseUrl + '/api/comedian/' + comedianId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findComedianByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/comedian/?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findComedianByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/comedian/?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateComedian(comedianId: string, comedian: any) {
    return this._http.put(this.baseUrl + '/api/comedian/' + comedianId, comedian)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteComedian(comedianId: string) {
    this._http.delete(this.baseUrl + '/api/comedian/' + comedianId);
  }

}
