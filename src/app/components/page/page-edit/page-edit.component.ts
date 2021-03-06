import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  name: string;
  title: string;
  pages = [];
  page: any;

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );

    this._pageService.findPagesByWebsiteId(this.userId)
      .subscribe((pages: any) => {
      this.pages = pages;
      });

    this._pageService.findPageById(this.pageId)
      .subscribe((page: any) => {
      this.page = page;
      this.name = this.page['name'];
      this.title = this.page['title'];
      });

  }

  pageList() {
    this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
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

  edit() {
    this._pageService.updatePage(this.pageId, {'_id': this.pageId, 'name': this.name,
      'websiteId': this.websiteId, 'title': this.title})
      .subscribe((page: any) => {
      this.page = page;
      this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId]);
      });
  }

  deletePage() {
    this._pageService.deletePage(this.pageId).subscribe(() => {
      this.pageList();
      }
    );
  }
}
