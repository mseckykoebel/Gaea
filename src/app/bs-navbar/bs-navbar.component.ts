import { Component } from "@angular/core";
import { AuthService } from "../auth-service.service";
import { AppUser } from "../models/app.user";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    // contact the auth service located in another file
    this.auth.logout();
  }
}
