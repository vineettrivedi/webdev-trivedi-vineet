
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SearchService {
  searchImage(image: String) {
    const url = 'https://api.flickr.com/' +
      'services/rest/?method=flickr.photos.search&api_key=612c750c9751a0899e7f4d8b53342ea3&text='
      + image + '&format=json&nojsoncallback=1';
    return this.http.get(url)
      .map( (response: Response) => {
        return response.json();
      });
  }

  constructor(private http: Http) {}
}
// 612c750c9751a0899e7f4d8b53342ea3
// 580fd707dfe6fa84a049479f797769de
