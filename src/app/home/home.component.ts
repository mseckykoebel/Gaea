import { Component } from "@angular/core";
import { AuthService } from "../auth-service.service";
import { AppUser } from "../models/app.user";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  appUser: AppUser;

  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }


}
