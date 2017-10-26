import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  // properties
  username: string;
  password: string;
  verifypassword: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.verifypassword = this.loginForm.value.verifypassword;
    this.errorFlag = false;
    this.userService.createUser({username: this.username, password: this.password})
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.router.navigate(['user/', user._id]);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
    // const user: any = this.userService.createUser({username: this.username, password: this.password});
    // this.router.navigate(['user/', user._id]);
  }

  login() {
    this.router.navigate(['login']);
  }

}
