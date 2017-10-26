import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  // api = {
  //   'createUser'   : this.createUser,
  //   'findUserById' : this.findUserById,
  //   'findUserByCredentials' : this.findUserByCredentials,
  //   'findUserByUsername' : this.findUserByUsername,
  //   'updateUser' : this.updateUser,
  //   'deleteUser' : this.deleteUser
  // };

  createUser(user: any) {
    return this._http.post(this.baseUrl + '/api/user', user)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserById(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserByCredentials(username: string, password: string) {
    return this._http.get(this.baseUrl + '/api/user/?username=' + username + '&password=' + password)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findUserByUsername(username: string) {
    return this._http.get(this.baseUrl + '/api/user/?username=' + username)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateUser(userId: string, user: any) {
    return this._http.put(this.baseUrl + '/api/user/' + userId, user)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteUser(userId: string) {
    this._http.delete(this.baseUrl + '/api/user/' + userId);
  }

}
