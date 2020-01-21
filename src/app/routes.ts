import { PostsComponent } from './posts/posts.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NotificationsComponent } from './notifications/notifications.component'
import { MessagesComponent } from './messages/messages.component'
import { LoginComponent } from './user/login/login.component'
import { SignupComponent } from './user/signup/signup.component'

import { Routes } from '@angular/router'
export const appRoutes:Routes = [
    {path: 'events', component: PostsComponent},
    {path: 'create-event', component: CreateEventComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
]