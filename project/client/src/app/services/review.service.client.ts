import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../../../../src/environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class ReviewService {

  constructor(private _http: Http) { }

  baseUrl = environment.baseUrl;

  createReview(criticId: string, review: any) {
    return this._http.post(this.baseUrl + '/api/critic/' + criticId + '/review', review)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findReviewsByCriticId(criticId: string) {
    return this._http.get(this.baseUrl + '/api/critic/' + criticId + '/review')
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  findReviewById(reviewId: string) {
    return this._http.get(this.baseUrl + '/api/reiview/' + reviewId)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  updateReview(reviewId: string, review: any) {
    return this._http.put(this.baseUrl + '/api/review/' + reviewId, review)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  deleteReview(reviewId: string) {
    return this._http.delete(this.baseUrl + '/api/review/' + reviewId)
      .map(
        (res: Response) => {
          return;
        }
      );
  }

}
