import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  constructor(private _widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
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
      });
  }

}
