import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor() { }

  widgets: any = [
    {'_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 2, 'text': 'GIZMODO'},
    {'_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100%',
      'url': 'http://lorempixel.com/400/200/'
    },
    {'_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    {'_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    {
      '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100%',
      'url': 'https://youtu.be/AM2Ivdi9c4E'
    },
    {'_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];

  api = {
    'createWidget'   : this.createWidget,
    'findWidgetsByPageId' : this.findWidgetsByPageId,
    'findWidgetById' : this.findWidgetById,
    'updateWidget' : this.updateWidget,
    'deleteWidget' : this.deleteWidget
  };

  createWidget(pageId: string, widget: any) {
    widget._id = Math.random();
    widget.pageId = pageId;
    this.widgets.push(widget);
    return widget;
  }

  findWidgetsByPageId(pageId: string) {
    const result = [];
    let count  = 0;
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        result[count++] = this.widgets[x];
      }
    }
    return result;
  }

  findWidgetById(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId: string, widget: any) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        if (this.widgets[x].widgetType === 'HEADING') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].size = widget.size;
          this.widgets[x].text = widget.text;
          return true;
        } else if (this.widgets[x].widgetType === 'IMAGE') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].width = widget.width;
          this.widgets[x].url = widget.url;
          return true;
        } else if (this.widgets[x].widgetType === 'YOUTUBE') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].width = widget.width;
          this.widgets[x].url = widget.url;
          return true;
        } else if (this.widgets[x].widgetType === 'HTML') {
          this.widgets[x].pageId = widget.pageId;
          this.widgets[x].text = widget.text;
          return true;
        }
      }
    }
    return false;
  }

  deleteWidget(widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        this.widgets.splice(x, 1);
      }
    }
    return false;
  }

}
