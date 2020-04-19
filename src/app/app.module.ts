import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { environment } from 'src/environments/environment';

import * as firebase from "firebase/app";
import "firebase/auth";
import { UserModule } from './modules/user/user.module';
import { DefaultLayoutComponent } from './shared/components/layouts/default-layout/default-layout.component';
import { AboutComponent } from './about/about.component';


firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DefaultLayoutComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
