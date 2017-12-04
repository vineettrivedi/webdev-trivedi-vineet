import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  userId: string;
  user = {};
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;


  constructor(private sharedService: SharedService, private userService: UserService,
              private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // this.activatedRoute.params
    //   .subscribe(
    //     (params: any) => {
    //       this.userId = params['uid'];
    //     }
    //   );
    //
    // this.userService.findUserById(this.userId)
    //   .subscribe((user: any) => {
    //   this.user = user;
    //     this.username = this.user['username'];
    //     this.password = this.user['password'];
    //     this.email = this.user['email'];
    //     this.firstName = this.user['firstName'];
    //     this.lastName = this.user['lastName'];
    //   });
    // this.user = this.userService.findUserById(this.userId);
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    this.username = this.user['username'];
    this.password = this.user['password'];
    this.email = this.user['email'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];

  }

  website() {
    this.router.navigate(['user/', this.userId, 'website']);
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
    // this.router.navigate(['/login']);
  }

  editProfile() {
    this.userService.updateUser(this.userId, {_id: this.userId, username: this.username, password: this.password,
      firstName: this.firstName, lastName: this.lastName})
      .subscribe((user: any) => {
        this.user = user;
        this.router.navigate(['user/', this.userId]);
      });
  }

  profile() {
    this.router.navigate(['user/', this.userId]);
  }

}
