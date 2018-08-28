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

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: "/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
