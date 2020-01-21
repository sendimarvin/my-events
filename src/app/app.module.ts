import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { RightAsideComponent } from './right-aside/right-aside.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { NotificationComponent } from './notification/notification.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import {provideConfig } from './user/provide.provider';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component'
import { CustomAuthService } from './user/auth.service';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    PostComponent,
    PostsComponent,
    SideNavigationComponent,
    RightAsideComponent,
    CreateEventComponent,
    NotificationsComponent,
    MessagesComponent,
    NotificationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SocialLoginModule
  ],
  providers: [
    CustomAuthService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
