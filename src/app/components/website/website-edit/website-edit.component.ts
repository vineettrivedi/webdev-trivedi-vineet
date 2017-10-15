import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  name: string;
  developerId: string;
  description: string;
  websites = [];
  website: any;

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
        }
      );
    this.websites = this._websiteService.findWebsitesByUser(this.userId);
    this.website = this._websiteService.findWebsiteById(this.websiteId);
    this.name = this.website['name'];
    this.developerId = this.website['developerId'];
    this.description = this.website['description'];
  }

  profile() {
    this.router.navigate(['user/', this.userId]);
  }

  websiteNew() {
    this.router.navigate(['user/', this.userId, 'website', 'new']);
  }

  page(website: any) {
    this.router.navigate(['user/', this.userId, 'website', website._id, 'page']);
  }

  websiteEdit(website: any) {
    this.router.navigate(['user/', this.userId, 'website', website._id]);
  }

  websiteList() {
    this.router.navigate(['user/', this.userId, 'website']);
  }

  edit() {
    this._websiteService.updateWebsite(this.websiteId, {'_id': this.websiteId, 'name': this.name,
      'developerId': this.developerId, 'description': this.description});
    this.router.navigate(['user/', this.userId, 'website', this.websiteId]);
  }

  deleteWebsite() {
    this._websiteService.deleteWebsite(this.websiteId);
    this.router.navigate(['user/', this.userId, 'website']);
  }
}
