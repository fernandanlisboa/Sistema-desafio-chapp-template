import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { routes } from '../../../../consts';
import { Admin } from '../../models/admin';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;

  constructor(private service: AuthService, private router: Router) {}

  public sendLoginForm(user: Admin): void {
    this.service.login(user).subscribe(
      (res) => {
        this.router.navigate([this.routers.DASHBOARD]).then();
        localStorage.setItem('token', res.id);
      },
      (err) => console.log(err)
    );
  }

  public sendSignForm(user: Admin): void {
    this.service.sign(user).subscribe(
      (res) => {
        this.sendLoginForm(user);
      },
      (err) => console.log(err)
    );
  }
}
