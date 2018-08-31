import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { AppUser } from "./models/app.user";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {

    // the user will be updated as to prevent any issues with creating new users
    this.db.object("/users/" + user.uid).update({
      name: user.displayName, // save as in the navbar
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<AppUser> {
    // return an app user object
    return this.db.object("/users/" + uid);
  }
}
