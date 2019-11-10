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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    PostComponent,
    PostsComponent,
    SideNavigationComponent,
    RightAsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
