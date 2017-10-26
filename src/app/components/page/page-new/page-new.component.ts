import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  @ViewChild('f') newPageForm: NgForm;

  userId: string;
  websiteId: string;
  name; string;
  title: string;
  errorFlag: boolean;
  errorMsg: 'Invalid name or title !';
  pages = [];

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.errorFlag = false;

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

  createNewPage() {
    this.name = this.newPageForm.value.name;
    this.title = this.newPageForm.value.name;
    this._pageService.createPage( this.userId, {'name': this.name, 'title': this.title} )
      .subscribe((page: any) => {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id]);
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

}
