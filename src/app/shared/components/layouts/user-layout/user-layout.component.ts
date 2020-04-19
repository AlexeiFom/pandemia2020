import { Component, OnInit } from '@angular/core';
import { User } from '@app/shared/models/user/user';
import { FirebaseAuthService } from '@app/shared/services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  user = new User();

  constructor(private firebaseAuthService: FirebaseAuthService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.firebaseAuthService.logout();
  }
}
