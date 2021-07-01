import { VerificationRequestComponent } from './user/verification-request/verification-request.component';
import { CollectionsComponent } from './collections/collections.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NgModule, Component } from '@angular/core';
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
import { FollowRequestsComponent } from './follow_requests/follow-requests/follow-requests.component';
import { CustomCollectionComponent } from './custom-collection/custom-collection.component';
import { PostPageComponent } from './post-page/post-page.component';
import { ReportComponent } from './report/report.component';
import { ReviewRequestsComponent } from './admin/review-requests/review-requests.component';



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
      { path:'profile-view/:username/report',component:ReportComponent } ,
      { path: 'post', component: PostComponent },
      { path:'feed',component:FeedComponent }            ]
  },
  {  path: 'reset-password', component: ResetPasswordComponent },
  
  
  {  path: 'admin', component: AdminComponent, canActivate: [AuthGuard],
  data: {
    allowedRoles: ['ADMIN']
  },
  
  children:[
    { path:'search',component:SearchComponent },
    { path:'my-collections',component:CollectionsComponent } ,
    { path: 'search/:type/:result',component:SearchResultsComponent},
    { path:'feed',component:FeedComponent },
    { path:'review-requests',component:ReviewRequestsComponent},
    { path:'', 
      redirectTo:"/admin/feed",
          pathMatch:"full"},
  ]
 },

  
 
  {  path: 'user', component: UserComponent , canActivate: [AuthGuard],
  
    
  data: {
    allowedRoles: ['USER']
  },
  children:[
    { path:'search',component:SearchComponent },
    { path:'my-collections',component:CollectionsComponent } ,
    { path: 'search/:type/:result',component:SearchResultsComponent},
    { path:'', 
      redirectTo:"/user/feed",
        pathMatch:"full"},
    { path:'feed',component:FeedComponent },
    {  path: 'post', component: PostComponent },
    { path:'feed/post-page/:id',component:PostPageComponent } ,
    {  path: 'custom-collection', component: CustomCollectionComponent },
    // {  path: 'profile-view',  component: ProfileViewComponent },
    { path: 'follow_requests', component: FollowRequestsComponent },
    { path: 'profile-view/:username',  component: ProfileViewComponent },
    { path: 'profile-view/:username/post-page/:id',  component: PostPageComponent },
    { path: 'my-collections/post-page/:id',  component: PostPageComponent },
    { path: 'search/:type/:result/post-page/:id',  component: PostPageComponent },
    { path:'profile-view/:username/report',component:ReportComponent } ,
    {  path: 'change-info', component: ChangeInfoComponent },
    { path:'verification-request' ,component:VerificationRequestComponent},


  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
