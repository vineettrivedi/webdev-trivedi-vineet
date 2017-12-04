import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { SharedService } from './shared.service.client';

// injecting service into module
@Injectable()

export class UserService {

  options: RequestOptions = new RequestOptions();
  constructor(private sharedService: SharedService, private _http: Http, private router: Router) { }

  baseUrl = environment.baseUrl;

  // api = {
  //   'createUser'   : this.createUser,
  //   'findUserById' : this.findUserById,
  //   'findUserByCredentials' : this.findUserByCredentials,
  //   'findUserByUsername' : this.findUserByUsername,
  //   'updateUser' : this.updateUser,
  //   'deleteUser' : this.deleteUser
  // };

  register(username: String, password: String) {
    this.options.withCredentials = true;
    const user = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/register', user, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const user = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/login', user, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/loggedin', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

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
