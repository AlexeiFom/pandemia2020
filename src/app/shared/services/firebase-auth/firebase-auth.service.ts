import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import * as firebaseui from "firebaseui";
import { User } from '@app/shared/models/user/user';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  ui: firebaseui.auth.AuthUI;
  user = new User();

  constructor(private router: Router) {
    this.ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    this.ui.disableAutoSignIn();
  }

  googleAuth() {
    let that = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.user.name = user.displayName;
        that.user.email = user.email;

        localStorage.user = JSON.stringify(that.user);
      } 
      else {
        localStorage.removeItem('user');
      }
    });

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
      signInSuccessUrl: './user',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            prompt: 'select_account'
          }
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
      
    });
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.router.navigate(['/login'])
      })
      .catch(e => {
        console.error('Sign Out Error', e);
      });
  }
}
