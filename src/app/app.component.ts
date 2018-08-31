import { Component } from "@angular/core";
import { AuthService } from "./auth-service.service";
import { Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  // read the local storage of the browser and return the user
  constructor(private userService: UserService,
    private auth: AuthService,
    router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user); // save the user in the database

        const returnUrl = localStorage.getItem("returnUrl");
        router.navigateByUrl(returnUrl); // nav by the returnUrl
      }
    })
  }
}
