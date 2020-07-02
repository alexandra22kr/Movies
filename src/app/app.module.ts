// import "@angular/compiler";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchService } from './movies/search.service';

const itemRooutes: Routes = [
  { path: ':id/info', component: PostComponent },
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent, children: itemRooutes },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    // HttpModule,
    // HttpClient,
    AppComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    NotfoundComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
