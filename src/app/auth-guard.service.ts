import { Injectable } from "@angular/core";
import { AuthService } from "./auth-service.service";
import { Router, RouterStateSnapshot } from "@angular/router";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class AuthGuard {

  constructor(private auth: AuthService, private router: Router) { }

  // get the URL that the user wanted when they tried to access a cerian page 
  // and was not logged in
  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(["/login"], {
          queryParams: {
            returnUrl: state.url
          }
        }
        );
        return false;
      }

    });
  }
}
