import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private _widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  userId: string;
  websiteId: string;
  pageId: string;
  widgets = [];

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );

    this._widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
      this.widgets = widgets;
      });

  }

  profile() {
    this.router.navigate(['user/', this.userId]);
  }

  widgetChooser() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
  }

  pageList() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
  }

  widgetEditHeader(widget: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
    widget._id, 'header']);
  }

  widgetEditYouTube(widget: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
      widget._id, 'youtube']);
  }

  widgetEditImage(widget: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
      widget._id, 'image']);
  }

}
