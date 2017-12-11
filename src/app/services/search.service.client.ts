
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {
  searchImage(image: String) {
    const url = 'https://api.flickr.com/' +
      'services/rest/?method=flickr.photos.search&api_key=e223db0dfbe2560648b4d6a33a6b91f9&text='
      + image + '&safe_search=1&format=json&nojsoncallback=1';
    return this.http.get(url)
      .map( (response: Response) => {
        return response.json();
      });
  }

  constructor(private http: Http) {}
}

// key: e223db0dfbe2560648b4d6a33a6b91f9
// secret: 58e7be631cb328c1
