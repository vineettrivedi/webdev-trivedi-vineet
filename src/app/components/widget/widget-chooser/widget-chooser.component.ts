import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

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

  widgetList() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  pageList() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
  }

  widgetNewHeader() {
    this._widgetService.createWidget(this.pageId, {})
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
          widget._id, 'header']);
      });
  }

  widgetEdit(widget: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
      widget._id]);
  }

  widgetNewYouTube() {
    this._widgetService.createWidget(this.pageId, {})
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
          widget._id, 'youtube']);
      });
  }

  widgetNewImage() {
    this._widgetService.createWidget(this.pageId, {})
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
          widget._id, 'image']);
      });
  }

  widgetNewHtml() {
    this._widgetService.createWidget(this.pageId, {})
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
          widget._id, 'html']);
      });
  }

  widgetNewText() {
    this._widgetService.createWidget(this.pageId, {})
      .subscribe((widget: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
          widget._id, 'text']);
      });
  }

}
