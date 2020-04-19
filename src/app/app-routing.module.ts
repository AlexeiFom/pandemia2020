import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { DefaultLayoutComponent } from './shared/components/layouts/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent,
    // children: [
    //   { path: 'about', component: AboutComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent }
    // ]
  },
  {
    path: 'home', component: DefaultLayoutComponent,
    // children: [
    //   { path: 'about', component: AboutComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent }
    // ]
  },

  {
    path: 'login', component: LoginComponent,
    // children: [
    //   { path: 'about', component: AboutComponent },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
