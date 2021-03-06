import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '@app/shared/services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private firebaseAuthService: FirebaseAuthService) {
  }

  ngOnInit(): void {
    this.firebaseAuthService.googleAuth();
  }
}
