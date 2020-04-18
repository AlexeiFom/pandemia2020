import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

import { DashboardComponent } from '@app/modules/user/dashboard/dashboard.component';
// import { environment } from '@env/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ui: firebaseui.auth.AuthUI;
  constructor() {
    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  }

  ngOnInit(): void {
    debugger;

    //let url = __dirname;

    this.ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          return true;
        },
        uiShown: function () {
          document.getElementById('loader').style.display = 'none';
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: 'https://www.google.com',
      // signInSuccessUrl:  __dirname 'https://www.google.com',

      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
        },
        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: [
            'public_profile',
            'email',
            'user_likes',
            'user_friends'
          ],
          customParameters: {
            // Forces password re-entry.
            auth_type: 'reauthenticate'
          }
        }
      ],
      // Other config options...
    });
    //}

  }

}
