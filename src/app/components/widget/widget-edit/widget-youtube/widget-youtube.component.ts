import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  constructor(private _widgetService: WidgetService, private activatedRoute: ActivatedRoute,
              private router: Router, private sanitizer: DomSanitizer) { }

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  width: string;
  url: string;
  widgets = [];
  widget: any;

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
    this.widgets = this._widgetService.findWidgetsByPageId(this.pageId);
    this.widget = this._widgetService.findWidgetById(this.widgetId);
    this.width = this.widget.width;
    this.url = this.widget.url;
  }

  profile() {
    this.router.navigate(['user/', this.userId]);
  }

  widgetChooser() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId,
      'widget', 'new']);
  }

  widgetList() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  pageList() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
  }

  widgetEdit(widget: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
      widget._id]);
  }

  deleteWidget() {
    this._widgetService.deleteWidget(this.widgetId);
    this.widgetList();
  }

  editWidget() {
    this._widgetService.updateWidget(this.widgetId, {'_id': this.widget._id,
      'widgetType': this.widget.widgetType,
      'pageId': this.widget.pageId,
      'width': this.widget.width,
      'url': this.widget.url});
    this.widgetList();
  }

}
