import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ChangeInfoComponent } from './change-info/change-info/change-info.component';
import { PostComponent } from './post/post/post.component';
import { ProfileViewComponent } from './view-profile/profile-view/profile-view.component';
import { SearchComponent } from './search/search.component';
import { FeedComponent } from './home/feed/feed/feed.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path:'', 
          redirectTo:"/login",
                pathMatch:"full"},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path:'search',component:SearchComponent },
      { path: 'profile-view/:username',  component: ProfileViewComponent },
      { path:'feed',component:FeedComponent }            ]
  },
  {  path: 'reset-password', component: ResetPasswordComponent },
  {  path: 'change-info', component: ChangeInfoComponent },
  {  path: 'post', component: PostComponent },
  {  path: 'profile-view/:username',  component: ProfileViewComponent },
  {  path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
  data: {
    allowedRoles: ['ADMIN']
  },
  children:[
    { path:'search',component:SearchComponent }
  ]
 },
  {  path: 'user', component: UserComponent , canActivate: [AuthGuard],
  data: {
    allowedRoles: ['USER']
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
