import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private verifyCodeRequired: Boolean;

  constructor() {
    this.verifyCodeRequired = false;
  }

  ngOnInit() {
  }

  loginClicked() {
    console.log('You clicked login');
  }
}
