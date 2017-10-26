import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  // api = {
  //   'createWebsite'   : this.createWebsite,
  //   'findWebsitesByUser' : this.findWebsitesByUser,
  //   'findWebsiteById' : this.findWebsiteById,
  //   'updateWebsite' : this.updateWebsite,
  //   'deleteWebsite' : this.deleteWebsite
  // };

  createWebsite(userId: string, website: any) {
    return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsitesByUser(userId: string) {
    return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findWebsiteById(websiteId: string) {
    return this._http.get(this.baseUrl + '/api/user/website/' + websiteId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateWebsite(websiteId: string, website: any) {
    return this._http.put(this.baseUrl + '/api/user/website/' + websiteId, website)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteWebsite(websiteId: string) {
    return this._http.delete(this.baseUrl + '/api/user/website/' + websiteId)
      .map(
        (res: Response) => {
          return;
        }
      );
  }

}
