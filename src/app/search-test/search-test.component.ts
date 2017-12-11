import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service.client';
import {WidgetService} from '../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {

  image: String;
  result: any;
  userId: string;
  websiteId: string;
  widgetId: string;
  pageId: string;

  searchImage(image: String) {
    this.searchService.searchImage(image)
      .subscribe((result) => {
       // console.log(result);
        this.result = result;
      });
  }

  selectImage(photo) {
    const widget = {'widgetType': 'IMAGE', 'pageId': this.pageId, 'width': '100%',
      'url': 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_'
    + photo.secret + '_s.jpg' };

    this._widgetService.updateWidget(this.widgetId, widget)
      .subscribe(( newWidget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page',
          this.pageId, 'widget']);
      });
  }

  constructor(private searchService: SearchService, private _widgetService: WidgetService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );

  }

}
