import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserLayoutComponent } from '@app/shared/components/layouts/user-layout/user-layout.component';
import { AuthGuardService } from '@app/shared/services/auth-guard.service';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "scheduler",
        component: SchedulerComponent,
      },
      {
        path: "news",
        component: NewsComponent,
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
