import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as firebase from "firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./user.service";
import { AppUser } from "./models/app.user";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // define a custom observable of the current user of the application
  user$: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService) {
    this.user$ = afAuth.authState;
  }

  // can define a new user as we are testing the service and not the component
  login() {
    // store returnUrl in local storage before the user is authenticated by
    // this method
    const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        // see if the user is null or not
        if (user) {
          return this.userService.get(user.uid);
        }

        return Observable.of(null);
      });
  }
}
