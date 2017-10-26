import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: string;
  websiteId: string;
  pages = [];

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );

    this._pageService.findPagesByWebsiteId(this.userId)
      .subscribe((pages: any) => {
      this.pages = pages;
      });
  }

  pageNew() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
  }

  pageEdit(page: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id]);
  }

  widgetList(page: any) {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']);
  }

  websiteList() {
    this.router.navigate(['user/', this.userId, 'website']);
  }

  profile() {
    this.router.navigate(['user/', this.userId]);
  }

}
