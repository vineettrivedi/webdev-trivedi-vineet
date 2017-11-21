import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../../../../src/environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class BitService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createBit(comedianId: string, bit: any) {
    return this._http.post(this.baseUrl + '/api/comedian/' + comedianId + '/bit', bit)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findBitsByComedianId(comedianId: string) {
    return this._http.get(this.baseUrl + '/api/comedian/' + comedianId + '/bit')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findBitById(bitId: string) {
    return this._http.get(this.baseUrl + '/api/reiview/' + bitId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateBit(bitId: string, bit: any) {
    return this._http.put(this.baseUrl + '/api/bit/' + bitId, bit)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteBit(bitId: string) {
    return this._http.delete(this.baseUrl + '/api/bit/' + bitId)
      .map(
        (res: Response) => {
          return;
        }
      );
  }

}
