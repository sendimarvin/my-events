import { PostsComponent } from './posts/posts.component';
import { CreateEventComponent } from './create-event/create-event.component';

import { Routes } from '@angular/router'
export const appRoutes:Routes = [
    {path: 'events', component: PostsComponent},
    {path: 'create-event', component: CreateEventComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
]