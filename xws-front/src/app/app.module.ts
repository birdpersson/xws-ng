import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './home/register/register.component';

import { AuthInterceptor } from './_helpers/auth.interceptor';
import { AuthGuard } from './_helpers/auth.guard'
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangeInfoComponent } from './change-info/change-info/change-info.component';
import { PostComponent } from './post/post/post.component';
import { ProfileViewComponent } from './view-profile/profile-view/profile-view.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChangeInfoComponent,
    PostComponent,
    AdminComponent,
    UserComponent,
    ProfileViewComponent,
  ],
     
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,    
    MatNativeDateModule,
    MatGridListModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    
  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
