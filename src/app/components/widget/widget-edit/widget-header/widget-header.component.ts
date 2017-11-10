import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  constructor(private _widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) { }

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  size: string;
  text: string;
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

    this._widgetService.findWidgetsByPageId(this.pageId)
      .subscribe((widgets: any) => {
        this.widgets = widgets;
      });

    this._widgetService.findWidgetById(this.widgetId)
      .subscribe((widget: any) => {
        this.widget = widget;
        this.size = this.widget.size;
        this.text = this.widget.text;
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

  widgetEdit(widget: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
      widget._id]);
  }

  deleteWidget() {
    this._widgetService.deleteWidget(this.widgetId).subscribe(() => {
      this.widgetList();
    });
  }

  editWidget() {
    this._widgetService.updateWidget(this.widgetId, {'_id': this.widgetId, 'widgetType': 'HEADING',
      'pageId': this.pageId, 'size': this.size, 'text': this.text})
      .subscribe((widget: any) => {
      this.widget = widget;
      this.widgetList();
      });
  }

}
