import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from '@app/shared/components/layouts/user-layout/user-layout.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    UserComponent,
    UserLayoutComponent,
    SchedulerComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
