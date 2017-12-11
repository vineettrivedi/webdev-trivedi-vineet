import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.router.navigate(['user']);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );

    // this.userService.findUserByCredentials(this.username, this.password)
    //   .subscribe(
    //     (user: any) => {
    //       this.errorFlag = false;
    //       this.router.navigate(['user/', user._id]);
    //     },
    //     (error: any) => {
    //       this.errorFlag = true;
    //     }
    //   );
  }

  register() {
    this.router.navigate(['register']);
  }


}
