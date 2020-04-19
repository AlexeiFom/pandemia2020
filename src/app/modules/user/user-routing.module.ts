import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserLayoutComponent } from '@app/shared/components/layouts/user-layout/user-layout.component';
import { AuthGuardService } from '@app/shared/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    canActivate:[AuthGuardService],
    children: [
      {
        path: "",
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
