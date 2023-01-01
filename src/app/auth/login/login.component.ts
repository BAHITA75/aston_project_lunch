import { TokenService } from '../../_services/auth/token.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';

interface ICredentials {
  email: string;
  password: string;
}

interface IToken {
  access_token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: ICredentials = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {}

  // onSubmit(): void {
  //   console.log(this.form);
  //   this.authService.login(this.form).subscribe(
  //     (data) => {
  //       this.tokenService.saveToken(data.access_token);
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  onSubmit(): void {
    console.log(this.form);
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.headers.get('Authorization'));
        this.tokenService.saveToken(data.headers.get('Authorization'));
      },
      err => console.log(err),
    );
  }
}
