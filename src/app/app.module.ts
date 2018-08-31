import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { environment } from "../environments/environment.prod";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";

import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { APP_BASE_HREF } from "@angular/common";
import { AccountComponent } from "./account/account.component";

import { AuthService } from "./auth-service.service";
import { AuthGuard } from "./auth-guard.service";
import { UserService } from "./user.service";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "account", component: AccountComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
