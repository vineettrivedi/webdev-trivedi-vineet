import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') newWebsiteForm: NgForm;

  userId: string;
  name: string;
  description: string;
  errorFlag: boolean;
  errorMsg: 'Invalid name or description !';
  websites = [];

  constructor(private _websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.errorFlag = false;

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    this.websites = this._websiteService.findWebsitesByUser(this.userId);

  }

  createNewWebsite() {
    this.name = this.newWebsiteForm.value.name;
    this.description = this.newWebsiteForm.value.description;
    const website: any = this._websiteService.createWebsite( this.userId, {'name': this.name, 'description': this.description} );
    this.router.navigate(['user/', this.userId, 'website', website._id]);
  }

  websiteNew() {
    this.router.navigate(['user/', this.userId, 'website', 'new']);
  }

  websiteList() {
    this.router.navigate(['user/', this.userId, 'website']);
  }

  websiteEdit(website: any) {
    this.router.navigate(['user/', this.userId, 'website', website._id]);
  }

  profile() {
    this.router.navigate(['user/', this.userId]);
  }

  page(website: any) {
    this.router.navigate(['user/', this.userId, 'website', website._id, 'page']);
  }
}
